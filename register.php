<?php 
require('lib/db_connect.php');

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
	<?php require('lib/header.php') ?>
	<div class="container-fluid" style="margin-top: 10px;">
	<div class="row">
	<div class="col-md-offset-3">
	<form class="form-horizontal" role="form" action="_api/users/index.php" method="post">
	  <div class="form-group">
	    <label for="unq" class="col-sm-2 control-label">Uniqname</label>
	    <div class="col-sm-4">
	      <input type="text" class="form-control" name="unq" placeholder="unq">
	    </div>
	  </div>
	  <div class="form-group">
	    <label for="first_name" class="col-sm-2 control-label">First Name</label>
	    <div class="col-sm-4">
	      <input type="text" class="form-control" name="first_name" placeholder="first">
	    </div>
	  </div>

  	  <div class="form-group">
	    <label for="unq" class="col-sm-2 control-label">Last Name</label>
	    <div class="col-sm-4">
	      <input type="text" class="form-control" name="last_name" placeholder="last">
	    </div>
	  </div>

	  <div class="form-group">
	    <label for="email" class="col-sm-2 control-label">Email</label>
	    <div class="col-sm-4">
	      <input type="text" class="form-control" name="email" placeholder="emailz">
	    </div>
	  </div>


	  <div class="form-group">
	    <label for="password" class="col-sm-2 control-label">Password</label>
	    <div class="col-sm-4">
	      <input type="password" class="form-control" name="password" placeholder="Password">
	    </div>
	  </div>

	  <div class="form-group">
	    <label for="password_confirm" class="col-sm-2 control-label">Confirm Password</label>
	    <div class="col-sm-4">
	      <input type="password" class="form-control" name="password_form" placeholder="Confirm">
	    </div>
	  </div>

	  <div class="form-group">
	    <div class="col-sm-offset-2 col-sm-4">
	      <button type="submit" class="btn btn-success">Submit</button>
	    </div>
	  </div>
	</form>
	</div></div>
	</div>

	<script type="text/javascript" src="js/lib/jquery/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js/lib/bootstrap/bootstrap.min.js"></script>	
	</body>

</html>