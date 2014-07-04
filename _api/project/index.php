<?php
// header('Content-Type: application/json');
require '../../lib/db_connect.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->get('/', function () {
    // return all da projects
    global $mysqli;
    $query = "SELECT name, description FROM CKSD2014_projects";
	$prepared_statement = $mysqli->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
    $prepared_statement->execute();
    while ($row = $prepared_statement->fetchObject()) {
    	echo json_encode($row);
    }
     
});

$app->get('/hello', function() {
	echo json_encode(array("snitches" => "stitches"));
});

$app->get('/:id', function ($id) {
	global $mysqli;
    $id = intval($id);
	$query = "SELECT * FROM CKSD2014_projects WHERE id = :id";
	$prepared_statement = $mysqli->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
	$response = $prepared_statement->execute(array(':id' => $id));
	echo json_encode($response->fetchObject());
});

$app->get('/hello/:name', function ($name) {
    echo "Hello, $name";
});

$app->run();

//echo json_encode(json_decode(file_get_contents('php://input'), true)) . "\n";

/*if ($request === 'GET') {
	if (!array_key_exists('id', $_REQUEST)) {
		//echo json_encode(array());
		die;
	}
	$id = intval($_REQUEST['id']);
	$query = 'SELECT name, description from CKSD2014_projects WHERE id = :id';
	$prepared_statement = $mysqli->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
	$prepared_statement->execute(array(':id' => $id));
	$response = $prepared_statement->fetchObject();
	//echo json_encode($response);
}*/

?>
