<?php
session_start();
//echo $_SESSION['deliver'];
   $link = new mysqli('localhost', 'root', '', 'dbweb');
   mysqli_set_charset($link, "utf8");
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    if (mysqli_query($link, "DELETE FROM orders WHERE deliver_order='{$_SESSION['deliver']}'")) {
    	echo 1;
    }

?>