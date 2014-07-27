<!doctype html5>
<html>
	<head>
		<title> Monthly Report Form </title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
		<link href="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet"/>
		<style> 
/*		.navbar-brand {
			margin-left: -53px !important;
			padding-left: 0px;
		}*/
		.navbar-simple .brand {
		 	padding-top: 15px;
			padding-bottom: 15px;
		}
		.navbar-simple .navbar-inner {
			background: #fff;
			filter: none !important;
			box-shadow: 0 2px 15px rgba(0,0,0,0.25);
			-moz-box-shadow: 0 2px 15px rgba(0,0,0,0.25);
			-webkit-box-shadow: 0 2px 15px rgba(0,0,0,0.25);
			border-bottom: 1px solid rgba(0,0,0,0.2);
		}
		.navbar-simple .navbar-inner .nav {
			float: right;
		}
		.navbar-simple .navbar-inner .nav li a {
			background: none;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
			color: #777;
			font-size: 13px;
			padding-top: 15px;
			padding-bottom: 15px;
			font-weight: 600;
		}
		.navbar-simple .navbar-inner .nav li a:hover {
			background: none;
			-webkit-box-shadow: none;
			-moz-box-shadow: none;
			box-shadow: none;
			color: #bf3604;
		}		
		.navbar-simple .navbar-inner .nav li.active a {
			color: #bf3604;
		}

		td {
			background-color: rgba(86,61,124,.15)
		}
		#external-committees td {
			width: 20%;
		}
		#internal-committees td {
			width: 20%;
		}
		td.active {				
			background-color: #CCFFCC !important;
		}
		.table-bordered {
			border: 1px solid rgba(86,61,124,.2);
			font-size: 14px;
		}
		span[name=checkbox] :hover {
			color: #FFFFFF;
		}
		.check :hover {
			color: #FFFFFF;
		}
		ul#committee-view-list > li > a {
			padding: 4px 20px;
			color: #999;
			font-size: 13px;
			font-weight: 500;
			display: block;
			cursor: pointer;
		}
		ul#committee-view-list > li.active > a, ul#committee-view-list > li.active > a:hover{
			padding-left: 18px;
			border-left: 2px solid #563d7c;
			font-weight: 700;
			color: #563d7c;
			background-color: transparent;
		}
	
		ul#committee-view-list > li > a:hover {
			padding-left:19px;
			color:#563d7c;
			text-decoration:none;
			background-color:transparent;
			border-left:1px solid #563d7c
		}
		li#committee-view-list > a {
			padding: 4px 20px;
			color: #999;
			font-size: 13px;
			font-weight: 500;
			display: block;
		}
		li#committee-view-list > a:hover {
			padding-left:19px;
			color:#563d7c;
			text-decoration:none;
			background-color:transparent;
			border-left:1px solid #563d7c
		}
		li#questions-view-list {
			padding: 10px 10px;
		}
		img[name=internal], img[name=external] {
			margin-top: -9px;
			margin-left: 5px;
			margin-right: 5px;
		}
		body { padding-top: 50px; }
		</style>
	</head>

	<body>
		<header>
		<div class="navbar navbar-default navbar-fixed-top" role="navigation">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#"> Circle K </a>
        </div>
        <div class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="#">Home</a></li>
            <!-- TODO: turn this into actual links -->
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Calendar</a></li>
            <li><a href="#leadership">Leadership</a></li>
            <li><a href="#join"> Join Now! </a></li>
            <li class="hidden-xlg hidden-md hidden-sm"><a href="#houseCompetition"> House Competition </a></li>
            <li class="hidden-md hidden-sm"><a href="#ltvp">Long Term Volunteer Positions </a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <p class="navbar-text" style="margin-right: -1px;">Logged in as: </p>
            <li class="dropdown">
            	<a class="dropdown-toggle" data-toggle="dropdown">Vishaal Kalwani <span class="caret"></span></a>
            	<ul class="dropdown-menu" role="menu">
            		<li><a href="#"> Admin </a></li>
            		<li><a href="#"> My Service Hours </a></li>
            		<li><a href="#"> My Projects </a></li>
            		<li><a href="#"> Profile </a></li>
            		<li><a href="#"> Log out </a></li>
            	</ul>
            </li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </div>
	</header>
	<?php
	// do some server shit
	?> 

	<div class="container-fluid">

		<div class="text-center">
			<h3> Monthly Report Form Question Editor </h3><button style="margin-top: -40px;" id="close" type=button class="pull-right btn btn-sm btn-primary"> Close View </button>
		</div> 
	</div>
	<div class="container-fluid" id="QuestionContainer"> 
		<ul class="nav nav-tabs nav-justified" role="tablist">
			<li><a id="question-tab" href="#question-view" role="tab" >View by Question</a></li>
			<li><a id="committee-tab" href="#committee-view" role="tab">View by Committee</a></li>
		</ul>
	</div>

	<div class="container-fluid" id="ViewContainer" style="margin-top: 10px;">
	</div>

	<div class="container-fluid" id="CommitteeViewContainer" style="margin: 5px 5px;">
	</div>

	<div class="container-fluid" id="Container2">
	</div>

	<script> var session = <?php echo json_encode(array("username" => "vishaalk")); ?> </script>
	<script type="text/javascript" data-main="js/mrf_questionsMainModule.js" src="js/lib/require/require.js"></script>
	<!--<script type="text/javascript" data-main="js/build/booya.js" src="js/lib/require/require.js"></script>-->

    <!-- // <script src="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/js/bootstrap-editable.min.js"></script> -->
	</body>
</html>