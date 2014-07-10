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

$app->get('/:id(/)', function($id) use ($app) {
	global $mysqli;
	$id = intval($id);
	$query = "select * from mrf_questions where id=" . $id;
	$results = $mysqli->query($query);
	echo json_encode($results->fetchObject()); 
});

/*
Get all the committees for which this question is active
*/
$app->get('/:id/active(/)', function($id) use ($app) {
	global $mysqli;
	$id = intval($id);
	$query = "select * from mrf_form_questions where question_id=" . $id;
	$results = $mysqli->query($query);
	echo json_encode($results->fetchAll(PDO::FETCH_OBJ));
});

$app->delete('/:id/active/:committeeID(/)', function($id, $committeeID) use ($app) {
	global $mysqli;
	$id = intval($id);
	$committeeID = intval($committeeID);
	$query = "delete from mrf_form_questions where question_id=" . $id . " and committeeID=" . $committeeID;
	$results = $mysqli->query($query);
});

$app->post('/:id/active(/)', function($id) use ($app) {
	global $mysqli;
	$id = intval($id);
	//$committeeID = intval($committeeID);
	$dataIn = $app->request()->getBody();
	$dataIn = json_decode($dataIn);
	// echo $dataIn->{'_id'};

	$committeeID = intval($dataIn->{'_id'});
	// echo $committeeID;
	// echo json_encode($app->request()->params());
	$vals = array($id, $committeeID, 1); //the 1 is order
	$query = "insert into mrf_form_questions (question_id, committeeID) VALUES (" . $id . "," . $committeeID . ")";
	$results = $mysqli->query($query);
	// echo json_encode($results->fetchAll(PDO::FETCH_OBJ));
});

// $app->post('/', function() use ($app) {
// 	echo json_encode($app->request()->params());
// });

// $app->put('/:id', function($id) use ($app) {
// 	echo $app->request()->params();
// });

$app->run(); 
