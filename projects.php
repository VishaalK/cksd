<!DOCTYPE html>
<html lang="en">
	<head>
		<title> Service Day | Projects </title>
        <meta charset="utf-8"></head>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
	        body {
	            margin-top: 20px;
	            margin-bottom: 20px;
	            min-height: 1000px;
	        }
	        navbar {
	            margin-bottom: 20px;
	        }
	        #Banner {
	        	margin-bottom: 20px;
	        }
        </style>
	</head>	
	<body>	
	<header class="container">
	<nav class="navbar navbar-default" role="navigation">
	  <div class="container-fluid">
	    <!-- Brand and toggle get grouped for better mobile display -->
	    <div class="navbar-header">
	      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
	        <span class="sr-only">Toggle navigation</span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	        <span class="icon-bar"></span>
	      </button>
	      <a class="navbar-brand" href="#">Circle K</a>
	    </div>

	    <!-- Collect the nav links, forms, and other content for toggling -->
	    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
	      <ul class="nav navbar-nav">
	        <li class="active"><a href="#">Home</a></li>
	        <li><a href="#">About</a></li>
	        <li><a href="#">Calendar</a></li>
	        <li><a href="#">Leadership</a></li>
	        <li><a href="#">Join Now</a></li>
	        <li><a href="#">House Cup</a></li>
	        <li><a href="#">Long Term Volunteer Positions</a></li>
	      </ul>
	      <ul class="nav navbar-nav navbar-right">
	        <li class="dropdown">
	          <a href="#" class="dropdown-toggle" data-toggle="dropdown"><%= name %><b class="caret"></b></a>
	          <ul class="dropdown-menu">
	            <li><a href="#">Action</a></li>
	            <li><a href="#">Another action</a></li>
	            <li><a href="#">Something else here</a></li>
	            <li class="divider"></li>
	            <li><a href="#">Separated link</a></li>
	          </ul>
	        </li>
	      </ul>
	    </div><!-- /.navbar-collapse -->
	  </div><!-- /.container-fluid -->
	</nav>
	</header>

	<h3> Please work </h3>
	
	<div class="container">
		<div class="row-fluid">
			<div class="col-md-10 col-md-offset-1" id="ProjectsContainer">

			</div>
		</div>
	</div>
	
	<footer>
	</footer>

	heyy
	<p> Why isn't this working </p>
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jQuery -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"> </script> <!-- underscore.js -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js"> </script> <!-- backbone.js -->
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script src="js/utils/backbone.localStorage.js"></script>
	<script src="js/models/Project.js"></script>
	<script src="js/views/ProjectView.js"></script>
	<script src="js/collections/Projects.js"></script>
	<script src="js/views/ProjectsView.js"></script>
	</body>

</html>	