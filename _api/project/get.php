<?php
header('Content-Type: application/json');
require '../../lib/db_connect.php';
if (array_key_exists('id', $_GET)) {
	$id = intval($_GET['id']);
	$query = 'SELECT name, description from CKSD2014_projects WHERE id = :id';
	$prepared_statement = $mysqli->prepare($query, array(PDO::ATTR_CURSOR => PDO::CURSOR_FWDONLY));
	$prepared_statement->execute(array(':id' => $id));
	$response = $prepared_statement->fetchObject();
	echo json_encode($response);
} else {
	$result = $mysqli->query('SELECT * FROM CKSD2014_projects');
	$result = $result->fetchAll(PDO::FETCH_ASSOC);
	foreach($result as $row) {
		$array[] = $row;
	}
	echo json_encode($array);
}

// $query = 'SELECT name, description from CKSD2014_projects where id=1';
// $result = $mysqli->query($query);
// foreach($result as $row) {
// 	echo json_encode($row);
// }
?>