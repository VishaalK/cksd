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
    echo json_encode($results);
});

$app->run(); 
