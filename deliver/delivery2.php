<?php
session_start();
   $link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    mysqli_set_charset($link, "utf8");
    if ( mysqli_query($link, "UPDATE deliverman SET availability = 0 WHERE username = '{$_SESSION['deliver']}';
") ){
                        echo 2;
                    }
                    else{
                        echo("Error description: " . mysqli_error($link));
                    }
?>