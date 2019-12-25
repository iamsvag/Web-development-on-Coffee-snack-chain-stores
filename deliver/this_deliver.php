<?php
session_start();
	if ( isset($_SESSION['deliver']) ){
		echo "{$_SESSION['deliver']}";
	}
	else{
		echo '0';
	}
    
?>