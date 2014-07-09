<!doctype html5>
<html>
	<head>
		<title> Monthly Report Form </title>
		<link href="css/bootstrap.min.css" rel="stylesheet">
		<link rel="stylesheet" href="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/themes/smoothness/jquery-ui.css" />
		<style> 
		.col-md-2 {
			background-color: rgba(86,61,124,.15);
			border: 1px solid rgba(86,61,124,.2);
			padding-top: 10px;
			padding-bottom: 10px;
			cursor: pointer;
		}
		.col-md-2.active {
			background-color: #BDECB6;
		}
		.col-md-2.inactive {
			background-color: white;
		}
		td {
			background-color: rgba(86,61,124,.15)
		}
		.table-bordered {
			border: 1px solid rgba(86,61,124,.2);
		}
		</style>
	</head>
	<body>
	<div class="container-fluid">
		<div class="text-center">
			<h3> Monthly Report Form Question Editor </h3>
			<p> #1: Jurgen Yurgen  <span style="color: green;" class="glyphicon glyphicon-ok"></span> </p>
		</div> 
		<div id="QuestionContainer"> </div>
	</div>

	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script> <!-- jQuery -->
	<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>
    <script src="http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min.js"> </script> <!-- underscore.js -->
    <script src="http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.0.0/backbone-min.js"> </script> <!-- backbone.js -->
    <script src="js/lib/bootstrap/bootstrap.min.js"></script>
    <script src="js/models/MRFQuestion.js"></script>
    <script src="js/views/MRFQuestions.js"></script>
    <script src="js/mrf_questions.js"></script>
	</body>
</html>