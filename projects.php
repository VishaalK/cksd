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
		          <a href="#" class="dropdown-toggle" data-toggle="dropdown">Vishaal Kalwani<span style="margin-left: 5px" class="caret"></span></a>
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
	<header class="container" id="NavbarContainer">
	</header>

	<h3> Please work </h3>
	
	<div class="container">

			<div id="ProjectsContainer">

			</div>
		</div>
	</div>
	
	<!-- Button trigger modal -->
	<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
	  Launch demo modal
	</button>

	<!-- Modal -->
	<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
	  <div class="modal-dialog">
	    <div class="modal-content">
	      <div class="modal-header">
	        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
	        <h4 class="modal-title" id="myModalLabel">Add a New Project</h4>
	      </div>
	      <div class="modal-body">
			<form role="form">
				<div class="form-group">
					<label for="exampleInputEmail1">Project Name</label>
					<input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
				</div>
				<div class="form-group">
					<label for="exampleInputPassword1">Description</label>
					<textarea class="form-control" id="exampleInputPassword1" placeholder="Password"></textarea>
				</div>
				<div class="form-group">
					<label for="exampleInputFile">Project Picture (optional)</label>
					<input type="file" id="exampleInputFile">
					<p class="help-block">Give your project some pizzazz!</p>
				</div>
				<div>
					<label class="checkbox-inline">
						<input type="checkbox" id="inlineCheckbox1" value="option1"> Large Group Friendly?
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" id="inlineCheckbox2" value="option2"> Is Drop In?
					</label>
				</div>
			</form>
	      </div>
	      <div class="modal-footer">
	        <button type="button" class="btn btn-default pull-left" data-dismiss="modal">Close</button>
	        <button type="button" class="btn btn-primary">Save Project</button>
	      </div>
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
    <script src="js/views/Navbar.js"></script>
	<script src="js/models/Project.js"></script>
	<script src="js/views/ProjectView.js"></script>
	<script src="js/collections/Projects.js"></script>
	<script src="js/views/ProjectsView.js"></script>
	</body>

</html>	