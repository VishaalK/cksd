<!DOCTYPE html>
<html lang="en">
	<head>
		<title> Service Day | Projects </title>
        <meta charset="utf-8"></head>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <link href="css/sticky-footer.css" rel="stylesheet">
        <link rel="stylesheet" href="css/bootstrap-datetimepicker.min.css" />
        <style>
	        body {
	            margin-top: 20px;
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

	<h3 class="text-center"> List of Projects <span class="glyphicon glyphicon-fire"></span></h3>
	
	<div class="container">

			<div id="ProjectsContainer">

			</div>
		</div>
	</div>
	

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
					<label for="status"> Status </label>
					<select class="form-control">
						<option>Open</option>
						<option>Closed</option>
						<option>Full</option>
						<option>Cancelled</option>
					</select>

				</div>
				<div class="form-group">
					<label class="checkbox-inline">
						<input type="checkbox" id="inlineCheckbox1" value="option1"> Large Group Friendly?
					</label>
					<label class="checkbox-inline">
						<input type="checkbox" id="inlineCheckbox2" value="option2"> Is Drop In?
					</label>
				</div>
				<div class="form-group">
					Nerdy <input type="datetime-local" name="bdaytime">
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

	<div id="newProjectForm" class="container">
		<form class="form-horizontal">
		<fieldset>

		<!-- Text input-->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="name">Project Name</label>  
		  <div class="col-md-5">
		  	<input id="name" name="name" placeholder="" class="form-control input-md" required="" type="text">
		  </div>

		</div>

		<div class="form-group">
	  		<label class="col-md-4 control-label" for="name">Site Leader</label> 
	 	 	<div class="col-md-5">
		  		<input id="siteLeader" name="siteLeader" placeholder="austinas" class="form-control input-md" required type="text">
		  	</div>
		</div>
		<!-- Textarea -->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="description">Project Description</label>
		  <div class="col-md-4">                     
		    <textarea class="form-control" id="description" name="description"></textarea>
		  </div>
		</div>

		<div class="form-group">
			<label class="col-md-4 control-label" for="startTime"> Start &amp; End Time</label>			
        	<div class='col-md-3'>
            	<input type='text' class="form-control" name="startTime" id="startTime"/>
        	</div>
        	<div class='col-md-3'>
        		<input type='text' class='form-control' name="endtime" id="endTime" />
        	</div>
    	</div>


		<!-- Multiple Checkboxes (inline) -->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="checkboxes"></label>
		  <div class="col-md-4">
		    <label class="checkbox-inline" for="checkboxes-0">
		      <input name="checkboxes" id="checkboxes-0" value="dropIn" type="checkbox">
		      Drop in?
		    </label>
		    <label class="checkbox-inline" for="checkboxes-1">
		      <input name="checkboxes" id="checkboxes-1" value="largeGroupFriendly" type="checkbox">
		      Large group friendly?
		    </label>
		  </div>
		</div>

		<!-- Select Basic -->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="status">Project Status</label>
		  <div class="col-md-4">
		    <select id="status" name="status" class="form-control">
		      <option value="open">Open</option>
		      <option value="closed">Closed</option>
		      <option value="full">Full</option>
		      <option value="cancelled">Cancelled</option>
		    </select>
		  </div>
		</div>

		<!-- File Button --> 
		<div class="form-group">
		  <label class="col-md-4 control-label" for="picture">Picture</label>
		  <div class="col-md-4">
		    <input id="picture" name="picture" class="input-file" type="file">
		  </div>
		</div>

		<!-- Button -->
		<div class="form-group">
		  <label class="col-md-4 control-label" for="submit"></label>
		  <div class="col-md-4">
		    <button id="submit" name="submit" type="button" class="btn btn-success">Submit</button>
		  </div>
		</div>

		</fieldset>
		</form>
	</div>
	


    <footer>
        <div class="container">
        <div class="row">
        <div class="col-md-4 column">
        	<p class="center-block footer-information">
        		Sint bitters beard skateboard fugiat ad VHS. Quis cupidatat keffiyeh umami food
        truck, art party 
        	</p>
        </div>
        <div class="col-md-4 column"><p class="center-block">
        	Sint bitters beard skateboard fugiat ad VHS. Quis cupidatat keffiyeh umami food
        truck, art party
        </p></div>
        <div class="col-md-4 column"><p class="center-block">
        	Sint bitters beard skateboard fugiat ad VHS. Quis cupidatat keffiyeh umami food
        truck, art party
        </p></div>
        </div>
    </footer>

	<!--<iframe
	width="600"
	height="450"
	frameborder="0" style="border:0"
	src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBE-XXBUF3En8bk2p-PTvZYQnzXOvKT1-8
	&q=Space+Needle,Seattle+WA">
	</iframe> -->

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
	<script type="text/javascript" src="js/utils/moment.min.js"></script>
	<script type="text/javascript" src="js/utils/bootstrap-datetimepicker.min.js"></script>
	<script type="text/javascript">
            $(function () {
                $('#startTime').datetimepicker({
                	defaultDate: "11/17/2014 10:00 AM",
                	minDate: "11/17/2014",
                	maxDate: "11/18/2014 10:00 PM",
                	sideBySide: true,
                	useStrict: true
                });
            });

            $(function () {
                $('#endTime').datetimepicker({
                	defaultDate: "11/17/2014 05:00 PM",
                	minDate: "11/17/2014",
                	maxDate: "11/18/2014 10:00 PM",
                	sideBySide: true,
                	useStrict: true
                });
            });
        </script>
	<!-- <script src="js/views/AddProjectView.js"></script> -->
	</body>

</html>	
