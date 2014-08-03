<?php
if (empty($_POST)) {
	header("Location: new404.html");
	// redirect to 404 not found die();
	exit;
}
require_once('lib/db_connect.php');

ob_start();
global $mysqli;
$unq = $_POST['unq'];

/**
 * Finds the user given the uniqname
 * @param unq uniqname
 * @return returns true if user found, false otherwise
 */	
$findUser = $mysqli->prepare("SELECT * FROM PeopleInfo WHERE unq=:unq");
$findUser->bindParam('unq', $unq);

if (!$findUser->execute()) {
	// Log an error here!
	session_unset();
	die('There was an error logged you in. Please contact the tech committee if this error persists');
}

if ($findUser->rowCount() < 1) {
	session_unset();
	die('There is no user with that name.');
}
$userInfo = $findUser->fetchObject();
$saltAndHash = $userInfo->{'password'};
$password = $_POST['password'];

if (!password_verify($password, $saltAndHash)) {
	session_unset();
	die('Incorrect password');
}

$_SESSION['logged_in'] = true;
$_SESSION['uniqname'] = $userInfo->{'unq'};
$_SESSION['first_name'] = $userInfo->{'first_name'};
$_SESSION['last_name'] = $userInfo->{'last_name'};
$_SESSION['email'] = $userInfo->{'email'};


if (array_key_exists('URI', $_SESSION)) {
	$requestUri = $_SESSION['URI'];
	header("Location: http://localhost" . $requestUri);
} else {
	header("Location: admin.php");
}
// ob_end_flush();

