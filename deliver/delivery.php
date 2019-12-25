<?php
session_start();
if ( (isset($_POST['address_of_d'])) && (isset($_POST['availability'])) ){
   $link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    mysqli_set_charset($link, "utf8");
    $address_of_d=$_POST['address_of_d'];
    $address_of_d = mysqli_real_escape_string($link, $address_of_d);
    $availability=$_POST['availability'];
    $availability = mysqli_real_escape_string($link, $availability);
    if ($result = mysqli_query($link, "SELECT work_hours FROM deliverman WHERE username='{$_SESSION['deliver']}'")) {
        $row = mysqli_fetch_assoc($result);
        $wrario=$row["work_hours"];
    }
    (int)$wrario = (int)$wrario + 8;
    if ( mysqli_query($link, "UPDATE deliverman SET current_position = '$address_of_d', availability = $availability, work_hours='$wrario' WHERE username = '{$_SESSION['deliver']}';
") ){
                        echo 1;
                    }
                    else{
                        echo("Error description: " . mysqli_error($link));
                    }
}
?>