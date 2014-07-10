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
	<div class="container-fluid">
		<div class="text-center">
			<h3> Monthly Report Form Question Editor </h3>
			<p> #1: Jurgen Yurgen  <span style="color: green;" class="glyphicon glyphicon-ok"></span> </p>
		</div> 
	</div>
	<div class="container-fluid" id="QuestionContainer"> 

	</div>

	<div class="container-fluid">
	<table class="table table-bordered" id="UsersList">
	    <tbody> <td> Vishaal </td> <td> Dangert </td> </tbody>
	</table>
	</div>


	<script src="js/lib/jquery/jquery-1.10.2.js"></script> <!-- jQuery -->
	<script src="js/lib/jquery/jquery-ui-1.10.4.min.js"></script> <!-- jQuery -->
    <script src="js/lib/underscore/underscore.js"> </script> <!-- underscore.js -->
    <script src="js/lib/backbone/backbone.min.js"> </script> <!-- backbone.js -->
    <script src="js/lib/bootstrap/bootstrap.min.js"></script>
    <script src="js/models/MRFQuestion.js"></script>
    <script src="js/views/MRFQuestions.js"></script>
    <script src="js/mrf_questions.js"></script>
	</body>
</html>