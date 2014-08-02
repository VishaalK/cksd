<?php 
require_once('lib/db_connect.php');

if (!array_key_exists('logged_in', $_SESSION) || !$_SESSION['logged_in']) {
	header( "refresh:2;url=login_page.php" );
	$_SESSION['URI'] = $_SERVER['REQUEST_URI'];
	echo "You must be logged in to view this page. You will be redirected in 2...";	
	exit;
}

?>
<!DOCTYPE html5>
<html lang="en">
	<head>
		<title> Join </title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
		<meta charset="utf-8">
		<style>
		body {
			padding-top: 50px;
		}
		</style>
	</head>
	<body>
	<?php require_once('lib/header.php') ?>
	<div class="container-fluid" style="margin-top: 10px;">
		<div class="row">
			<div class="col-md-offset-3">
				<h3> Booty </h3>
			</div>
		</div>
	</div>

	<script type="text/javascript" src="js/lib/jquery/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js/lib/bootstrap/bootstrap.min.js"></script>	
	<script type="text/javascript" src="js/lib/underscore/underscore.min.js"></script>
	<script type="text/javascript" src="js/lib/backbone/backbone.min.js"></script>
	</body>

</html>