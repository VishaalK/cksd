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
	$data = $app->request->params();
	/*$query = "INSERT INTO CKSD201_projects 
				(name, description, siteLeader, startDate, endDate, status, isDropIn, bigGroupFriendly, needsDriver, maxSignups)
				VALUES (:name, :description, :siteLeader, :startDate, :endDate, :status, :isDropIn, :bigGroupFriendly, :needsDriver, :maxSignups);";
	*/
	$stmt = $mysqli->prepare($query);
	$query->execute();

});

$app->put('/:id', function($id) use ($app) {
	$data = $app->request->params();
});

$app->delete('/:id', function($id) use ($app) {
	$id = intval($id);
});

$app->run();


?>
