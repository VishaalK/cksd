<!doctype html5>
<html>
	<head>
		<title> Monthly Report Form </title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
		<link href="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/css/bootstrap-editable.css" rel="stylesheet"/>
		<style> 
		.col-md-2 {
			background-color: rgba(86,61,124,.15);
			border: 1px solid rgba(86,61,124,.2);
			padding-top: 10px;
			padding-bottom: 10px;
			cursor: pointer;
		}
		.col-md-2.active {
			background-color: #CCFFCC;
		}
		.col-md-2.inactive {
			background-color: white;
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
		</style>
	</head>
	<body>
	<?php
	// do some server shit
	?> 
	<div class="container-fluid" style="margin-top: 10px;">
		<div style="text-align: left" class="col-md-3">Logged in as: Vishaal Kalwani</div>
		<div style="text-align: left" class="col-md-3">You are: Executive Committee Member</div>
		<div style="text-align: right" class="col-md-3">Admin</div>
		<div style="text-align: right" class="col-md-3">Logout</div>
	</div>
	<div class="container-fluid">

		<div class="text-center">
			<h3> Monthly Report Form Question Editor </h3><button style="margin-top: -40px;" id="close" type=button class="pull-right btn btn-sm btn-primary"> Close View </button>
		</div> 
	</div>
	<div class="container-fluid" id="QuestionContainer"> 
		<ul class="nav nav-tabs" role="tablist">
			<li><a id="question-tab" href="#question-view" role="tab" >View by Question</a></li>
			<li><a id="committee-tab" href="#committee-view" role="tab">View by Committee</a></li>
		</ul>
	</div>

	<div class="container-fluid" id="ViewContainer">
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