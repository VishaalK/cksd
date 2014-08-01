<?php
// header('Content-Type: application/json');
require_once '../../lib/db_connect.php';
require_once 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->get('/', function () {
    // return all da projects
    global $mysqli;
    $query = "SELECT id, email, firstName, lastName FROM CKSD2014_users";
	$prepared_statement = $mysqli->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $prepared_statement->execute();
    echo json_encode($prepared_statement->fetchAll(PDO::FETCH_OBJ), JSON_PRETTY_PRINT);
});

$app->get('/:id', function ($id) use ($app) {
	global $mysqli;
    $id = intval($id);
	$query = "SELECT * FROM CKSD2014_users WHERE id = :id";
	$prepared_statement = $mysqli->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
	$prepared_statement->execute(array(':id' => $id));
	echo json_encode($prepared_statement->fetchObject(), JSON_PRETTY_PRINT);
	// echo json_encode($prepared_statement->fetchObject(), JSON_PRETTY_PRINT);
});

$app->post('/login', function() use ($app) {
	global $mysqli;
	$dataIn = $app->request->params();
	// $persistent = $dataIn['remember_me'];

	$unq = $dataIn['unq'];
	$findUser = $mysqli->prepare("SELECT * FROM PeopleInfo WHERE unq=:unq");
	$findUser->bindParam('unq', $unq);

	if (!$findUser->execute()) {
		$app->response->setStatus(500);
		$app->response->write(json_encode(array('error' => $mysqli->errorInfo())));
		session_unset();
		return;
	}
	if ($findUser->rowCount() < 1) {
		$app->response->setStatus(400);
		$app->response->write(json_encode(array('error' => 'There is no user with that name!')));
		session_unset();
		return;
	}
	$userInfo = $findUser->fetchObject();
	$password = $dataIn['password'];
	$saltAndHash = $userInfo->{'password'};
	if (!password_verify($password, $saltAndHash)) {
		$app->response->setStatus(400);
		$app->response->write(json_encode(array('error' => 'Invalid password!')));
		session_unset();
		return;
	}
	//user exists, password verified, log zem in!
	//TODO: set cookie and persist sessions
	echo "got here";
	$_SESSION['logged_in'] = false;
	$_SESSION['uniqname'] = $userInfo->{'unq'};
	$_SESSION['first_name'] = $userInfo->{'first_name'};
	$_SESSION['last_name'] = $userInfo->{'last_name'};
	$_SESSION['email'] = $userInfo->{'email'};

	// if (array_key_exists('logged_in', $_SESSION) || !array_key_exists('umck-login', $_COOKIE) {

	// }
	// 	$mysqli = $this->_mysqli;
	// 	if(!array_key_exists('logged_in', $_SESSION) && array_key_exists('umck-login', $_COOKIE)) {
	// 		preg_match('/(.*):(.*)/', $_COOKIE['umck-login'], $matches); //get the username and cookie key
	// 		$unq = $mysqli->real_escape_string($matches[1]); //escaped vesion of uniquename
	// 		$key = hash('sha256', $matches[2]); //key is stored hashed in database, take care of that now
	// 		$result = $mysqli->query("SELECT unq FROM SessionKeys WHERE `unq`='$unq' && `key`='$key';");
	// 		if($result) {
	// 			if($result->num_rows) { //the login is valid
	// 				user_login($unq, 1, $key); //do not bother checking wheth this worked
	// 			}
	// 		} else {
	// 			new Log_Entry($mysqli, Log_Entry::error_mysqli, $mysqli->error);
	// 		}
	// 	}
	// }
});

//TODO: change this to use all 
$app->post('/', function() use ($app) {
	global $mysqli;
	$errors = array();
	$data = $app->request->params(); 
	// check if that uniqname or that e-mail exists
	$query = "SELECT * FROM PeopleInfo WHERE unq=:unq OR email=:email";
	//unq, 
	$stmt = $mysqli->prepare($query);
	$stmt->bindValue('unq', strip_tags($data['unq']));
	$stmt->bindValue('email', strip_tags($data['email']));
	$result = $stmt->execute();
	foreach($data as $key => $value) {
		if (!$value) {
			$app->response->setStatus(400);
			$app->response->write(json_encode(array('error' => 'One of more fields was left blank')));
			return;
		}
	}
	unset($key);
	unset($value);
	if ($stmt->rowCount() >= 1) {
		$app->response->setStatus(409);
		$app->response->write(json_encode(array('error' => 'User with that username or e-mail already exists!')));
		return;
	}
	if ($data['password'] != $data['password_confirm']) {
		$app->response->setStatus(400);
		$app->response->write(json_encode(array('error' => 'Password and password confirmation do not match.')));
		return;
	}
	if (strlen($data['password']) < 6) {
		$app->response->setStatus(400);
		$app->response->write(json_encode(array('error' => 'Password must be at least 6 characters') ));
		return;
	}
	if (!filter_var($data['email'], FILTER_VALIDATE_EMAIL)) {
		$app->response->setStatus(400);
		$app->response->write(json_encode(array('error' => 'The e-mail entered is invalid')));
		return;
	}
	define('PASSWORD_COST', 14);
	$unq = $data['unq'];
	$passwordAndSalt = password_hash($data['password'], PASSWORD_DEFAULT, ['cost' => PASSWORD_COST]);

	$insert_query = "INSERT INTO PeopleInfo (unq, first_name, last_name, email, password) VALUES (:unq, :first_name, :last_name, :email, :password);";
	$insert = $mysqli->prepare($insert_query);
	$insert->bindParam(':unq', $unq);
	$insert->bindParam(':first_name', $data['first_name']);
	$insert->bindParam(':last_name', $data['last_name']);
	$insert->bindParam(':password', $passwordAndSalt);
	$insert->bindParam(':email', $data['email']);
	if (!$insert->execute()) {
		$app->response->setStatus(500);
		$app->response->write(json_encode(array('error' => $mysqli->errorInfo())));	
	} 
	$app->response->setStatus(201);
	echo json_encode(array('id' => $mysqli->lastInsertId()));
});

$app->put('/:id', function($id) use ($app) {
	$data = $app->request->params();
});

$app->delete('/:id', function($id) use ($app) {
	$id = intval($id);
});

$app->run();


?>
