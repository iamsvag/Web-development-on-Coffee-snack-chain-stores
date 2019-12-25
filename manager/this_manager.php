<?php
session_start();
 $link = new mysqli('localhost', 'root', '', 'dbweb');
   mysqli_set_charset($link, "utf8");
   if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    if ($result = mysqli_query($link, "SELECT name FROM shop WHERE man_username='{$_SESSION['manager']}'")) {
    	$row = mysqli_fetch_assoc($result);
        echo $row["name"];
    }
?>