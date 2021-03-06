<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8"></head>
        <title> Circle K Service Day </title>
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
    <script type="text/template" id="NavbarTemplate">
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
	</script>

	<script type="text/template" id="TestTemplate">
	<p> <%= name  %> : <%= desc %> </p>
	</script>

	<div class="container" id="Banner">
		<div class="row text-center">
				<img class="img-responsive img-rounded" src="http://placehold.it/1170x150" />
		</div>
	</div>
	<div class="container" id="NavbarContainer">
	</div>
	<div class="container" id="TestContainer">
	</div>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jQuery -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"> </script> <!-- underscore.js -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js"> </script> <!-- backbone.js -->
    <script src="js/bootstrap/bootstrap.min.js"></script>
    <script src="js/utils/mustache.js"></script>
    <script src="js/views/Test.js"></script>
    <script src="js/views/Navbar.js"></script>
    <script src="js/models/Project.js"></script>
    </body>
</html>
