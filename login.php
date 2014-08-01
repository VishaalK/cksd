<?php 
require_once('lib/db_connect.php');

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
	<div class="container-fluid" style="margin-top: 10px;">
		<div class="row">
			<div class="col-md-offset-3">

	<form class="form-horizontal" role="form" action="_api/users/index.php/login" method="post">
		<div class="form-group">
		    <label for="unq" class="col-sm-2 control-label">Uniqname</label>
		    <div class="col-sm-4">
	    	 	<input type="text" class="form-control" name="unq" placeholder="unq">
	    	</div>
	  	</div>
	  	<div class="form-group">
		    <label for="first_name" class="col-sm-2 control-label"> Password </label>
		    <div class="col-sm-4">
		      	<input type="password" class="form-control" name="password">
		    </div>
	  	</div>
	  	<div class="form-group">
	    	<div class="col-sm-offset-2 col-sm-4">
	      		<button type="submit" class="btn btn-success">Submit</button>
	    	</div>
	  	</div>
	</form> 
			</div>
		</div>
	</div>

	<script type="text/javascript" src="js/lib/jquery/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js/lib/bootstrap/bootstrap.min.js"></script>	
	<script type="text/javascript" src="js/lib/underscore/underscore.min.js"></script>
	<script type="text/javascript" src="js/lib/backbone/backbone.min.js"></script>
	</body>

</html>