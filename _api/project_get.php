<?php
header('Content-Type: application/json');
require '../lib/db_connect.php';
$id = $_GET['id'];
$query = 'SELECT * from CKSD2014_projects WHERE id = :id';
$prepared_statement = $mysqli->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
$prepared_statement->execute(array(':id' => $id));
$response = $prepared_statement->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($response);

// $query = 'SELECT name, description from CKSD2014_projects where id=1';
// $result = $mysqli->query($query);
// foreach($result as $row) {
// 	echo json_encode($row);
// }
?>