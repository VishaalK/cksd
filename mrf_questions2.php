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
		td.active {				
			background-color: #CCFFCC !important;
		}
		.table-bordered {
			border: 1px solid rgba(86,61,124,.2);
			font-size: 14px;
		}
		</style>
	</head>
	<body>
	<div class="container-fluid" style="margin-top: 10px;">
		<div style="text-align: left" class="col-md-3">Logged in as: Vishaal Kalwani</div>
		<div style="text-align: left" class="col-md-3">You are: Executive Committee Member</div>
		<div style="text-align: right" class="col-md-3">Admin</div>
		<div style="text-align: right" class="col-md-3">Logout</div>
	</div>
	<div class="container-fluid">
		<div class="text-center">
			<h3> Monthly Report Form Question Editor </h3><button style="margin-top: -40px;" type=button class="pull-right btn btn-small btn-primary"> New Question </button>
		</div> 
	</div>
	<div class="container-fluid" id="QuestionContainer"> 
	</div>
	
	<div class="container-fluid" id="ViewContainer">
	</div>
	<a id="editable"> text </a>

	<script> var session = <?php echo json_encode(array("username" => "vishaalk")); ?> </script>
	<script type="text/javascript" data-main="js/mrf_questionsMain.js" src="js/lib/require/require.js"></script>
    <script src="js/lib/bootstrap/bootstrap.min.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/x-editable/1.5.0/bootstrap3-editable/js/bootstrap-editable.min.js"></script>
	</body>
</html>