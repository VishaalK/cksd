<?php
// header('Content-Type: application/json');
require '../../lib/db_connect.php';
require 'Slim/Slim.php';
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

$app->post('/', function() use ($app) {
	global $mysqli;
	$data = $app->request->params(); 
	// check if that uniqname or that e-mail exists
	$query = "SELECT * FROM PeopleInfo WHERE unq=:unq OR email=:email";
	$stmt = $mysqli->prepare($query);
	$stmt->bindValue('unq', strip_tags($data['unq']));
	$stmt->bindValue('email', strip_tags($data['email']));
	$result = $stmt->execute();
	if ($stmt->rowCount() >= 1) {
		$app->response->setStatus(409);
		//json_encode({ error: 'User with that username or e-mail already exists'});
		$app->response->write(json_encode({ 'error': 'User with that username or e-mail already exists!'} ));
	}

	// $query = "INSERT INTO PeopleInfo (unq, first_name, last_name, email, password, salt) VALUES \ 
	// 			VALUES (:unq, :first_name, :last_name, :email, :password, :salt);";
	// $stmt = $mysqli->prepare($query);
	// foreach ($data as $key => $value) {
 //    	$stmt->bindValue($key, strip_tags($value));  // bind the value to the statement
	// }	
	// if (!($result = $stmt->execute())) {
			//$app->response->setStatus(500);
	//		$app->response->write(json_encode($stmt->errorInfo()))
	// };
});

$app->put('/:id', function($id) use ($app) {
	$data = $app->request->params();
});

$app->delete('/:id', function($id) use ($app) {
	$id = intval($id);
});

$app->run();


?>
