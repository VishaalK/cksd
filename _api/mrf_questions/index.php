<?php
// get all da questions
require '../../lib/db_connect.php';
require '../../vendor/Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->get('/', function () {
    global $mysqli;
    $query = "select * from mrf_questions order by active desc, id asc";
    $results = $mysqli->query($query);
/*    foreach($results as $row) {
        echo json_encode($row);
};*/
    echo json_encode($results->fetchAll(PDO::FETCH_OBJ));
});

$app->post('/', function() use ($app) {
	global $mysqli;
	$dataIn = $app->request()->getBody();
	$dataIn = json_decode($dataIn);
	$text = $dataIn->{'text'};
	$active = $dataIn->{'active'};
	$stmt = $mysqli->prepare("INSERT INTO mrf_questions (text, active) VALUES (:text, :active)");
	$stmt->bindParam(':text', $text);
	$stmt->bindParam(':active', $active);
	$stmt->execute();
	echo json_encode($stmt->fetchAll(PDO::FETCH_OBJ), JSON_PRETTY_PRINT);
});
// $app->delete('/bulk/:ids+', function($ids) {
// 	global $mysqli;
// 	echo json_encode($ids);

// 	// $query = "delete from mrf_questions where committeeID in (" . join(",", $ids) . ")";
// 	//$results = $mysqli->query($query);
// 	//echo json_encode($results->fetchAll(PDO::FETCH_OBJ));
// });

$app->get('/:id(/)', function($id) use ($app) {
	global $mysqli;
	$id = intval($id);
	$query = "select * from mrf_questions where id=" . $id;
	$results = $mysqli->query($query);
	echo json_encode($results->fetchObject()); 
});

$app->delete('/:id(/)', function($ids) use ($app) {
	global $mysqli;
	// accept an array using is_array($id) -> array_map(function($id) { }, $id)
	// SELECT * from table where id in ($ids)
	$query = "delete from mrf_questions where id=" . $id;
	$results = $mysqli->query($query);
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
