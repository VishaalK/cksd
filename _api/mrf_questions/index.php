<?php
// get all da questions
require '../../lib/db_connect.php';
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->get('/', function () {
    global $mysqli;
    $query = "select * from mrf_questions";
    $results = $mysqli->query($query);
/*    foreach($results as $row) {
        echo json_encode($row);
};*/
    echo json_encode($results->fetchAll(PDO::FETCH_OBJ));
});

$app->get('/:id', function($id) use ($app) {
	global $mysqli;
	$id = intval($id);
	$query = "select * from mrf_questions where id=" . $id;
	$results = $mysqli->query($query);
	echo json_encode($results->fetchObject()); 
});

$app->post('/', function() use ($app) {
	echo json_encode($app->request()->params());
});

$app->put('/:id', function($id) use ($app) {
	echo $app->request()->params();
});

$app->run(); 
