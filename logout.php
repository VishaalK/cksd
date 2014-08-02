<?php
require_once('lib/db_connect.php');
// if(array_key_exists('logged_in', $_SESSION)) {
// 	$key = $mysqli->real_escape_string($_SESSION['sessionKey']);
// 	$unq = $mysqli->real_escape_string($_SESSION['Uniquename']);
// 	$query = "DELETE FROM SessionKeys WHERE `key`='$key' && `unq`='$unq';";
// 	if(!$mysqli->query($query))
// 		new Log_Entry($mysqli, Log_Entry::error_mysql, $mysqli->error);
// 	$expTime = time();
// 	setcookie('umck-login', '', strtotime('-1 day'), '/', $_SERVER['HTTP_HOST'], false, true);
// }
// $_SESSION = array();
session_destroy();
header('Location: login_page.php');
echo "what";

?>