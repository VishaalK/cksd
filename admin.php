<?php 
require_once('lib/db_connect.php');

if (!array_key_exists('logged_in', $_SESSION) || !$_SESSION['logged_in']) {
	header( "refresh:2;url=login_page.php" );
	$_SESSION['URI'] = $_SERVER['REQUEST_URI'];
	echo "You must be logged in to view this page. You will be redirected in 2...";	
	exit;
}

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
	<?php require_once('lib/header.php') ?>
	<div class="container-fluid" style="margin-top: 10px;">
		<div class="row">
			<div class="col-md-4 col-md-offset-1">
				<h3> General Member Links </h3>
				<ul class='list-unstyled'>
					<li><a href='pw_change.php'>Change My Password</a></li>
					<li>
						<a href='https://spreadsheets.google.com/pub?key=0AgECNptpXs6ldDZDZGlpc1lLdDJoU1YxaE5zVzU3RGc&hl=en&output=html' target='_blank'>
							KCC Directory
						</a>
					</li>
					<li><a href='viewHours.php'>My Service Hours</a></li>
					<li><a href='my_projects.php'>My Projects</a></li>
					<li><a href='member_profile.php'>My Profile</a></li>
					<li><a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=7ACQ6S5495A9N' target='_blank'> <img src='http://i.imgur.com/tRd0iTS.jpg' width='106px' height='34px' /> </a> </li>
				</ul>
			</div>
			<div class="col-md-4 col-md-offset-2">
				<h3>Committee Link</h3>
				<ul class='list-unstyled'>
					<li><a href='mem_req_view.php'>My Requirements</a></li>
					<li><a href='committee_directory.php'>Committee Directory</a></li>
					<li><a href='documents/GasVoucher13-14.doc'>Gas Reimbursement Voucher</a></li>
					<li><a href='documents/logos.docx' target='_blank'>Logos</a></li>
					<li><a href='documents/agendatemplate2.docx' target='_blank'>Agenda Template</a></li>
					<li><a href='documents/voucher.doc' target='_blank'>Voucher Forms</a></li>
				</ul>
			</div>
		</div>
		<div class="row">
			<div class="col-md-4 col-md-offset-1">
				<h3>Chair Links</h3>
				<ul class='list-unstyled'>
					<li><a href='./documents/CircleKLetterhead.docx'>Letter Head</a></li>
					<li><a href='viewHoursCommittee.php'>Committee Hours</a></li>
					<li><a href="committee_projects.php">Committee Projects</a></li>
					<li><a href='imageMan.php'>Event Image Manager</a></li>
					<li><a href=
					'https://mfile.umich.edu/?path=%2Fafs%2Fumich.edu%2Fgroup%2Fsoas%2Fcirclek&amp;goChange=Go'>
					CK IFS (mFile login)</a></li>
					<li><a href='mrf.php'>My Monthly Report</a></li>
					<li><a href='mrf_view.php'>My Prior Monthly Report</a></li>
					<li><a href="req_view.php">View Committee Requirement Tracker</a></li>
					<li><a href='directory_board.php'>Member Directory - View By Year</a></li>
				</ul>
			</div>
			<div class="col-md-4 col-md-offset-2">
				<h3>E-board Links</h3>
				<ul class='list-unstyled'>
					<li><a href='mrf_info.php'>MRF Information</a></li>
					<li><a href='member_create.php'>Simple Member Creation</a></li>
					<li><a href='membership_list.php'>Member Directory - View All</a></li>
					<li><a href='viewHoursALL.php'>View Hours for all Committee Members</a></li>
					<li><a href='committeeRoster.php'>Committee Roster</a></li>
					<li><a href="mrf_questions.php">MRF Question Management</a></li>
				</ul>
			</div>
		</div>
	</div>


	<script type="text/javascript" src="js/lib/jquery/jquery-1.10.2.js"></script>
	<script type="text/javascript" src="js/lib/bootstrap/bootstrap.min.js"></script>	
	<script type="text/javascript" src="js/lib/underscore/underscore.min.js"></script>
	<script type="text/javascript" src="js/lib/backbone/backbone.min.js"></script>
	</body>

</html>