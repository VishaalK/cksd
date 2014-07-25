<?php
// get all da questions
require '../../lib/db_connect.php';
require '../../vendor/Slim/Slim.php';

global $mysqli; // for db
\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->post('/login', function use ($app, $mysqli) {
	$dataIn = $app->request()->getBody();
	$dataIn = json_decode($dataIn);
	echo json_encode($dataIn);
});

?>