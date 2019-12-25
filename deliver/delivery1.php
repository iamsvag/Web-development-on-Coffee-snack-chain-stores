<?php
session_start();
//echo $_SESSION['deliver'];
   $link = new mysqli('localhost', 'root', '', 'dbweb');
   mysqli_set_charset($link, "utf8");
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    if ($result = mysqli_query($link, "SELECT to_address FROM orders WHERE deliver_order='{$_SESSION['deliver']}'")) {
        $row = mysqli_fetch_assoc($result);
        echo $row["to_address"];
    }

?>