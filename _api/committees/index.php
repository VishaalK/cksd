<?php

require '../../lib/db_connect.php';
require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();
$app->get('/', function()  {
    global $mysqli;
    $query = "select * from Committees";
    $results = $mysqli->query($query);
    echo json_encode($results->fetchAll(PDO::FETCH_OBJ));
});

$app->run();

?>
