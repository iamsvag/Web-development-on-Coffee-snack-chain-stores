<?php
session_start();
   $link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    mysqli_set_charset($link, "utf8");
    $j=0;
    if ($dresult = mysqli_query($link, "SELECT name FROM shop WHERE man_username='{$_SESSION['manager']}'")) {
        $row = mysqli_fetch_assoc($dresult);
        $shopname = $row["name"];
    }
    if ( $result = mysqli_query($link, "SELECT customer_order, to_address, deliver_order FROM orders WHERE shop_name='$shopname'") ){
            while ($row = mysqli_fetch_assoc($result)){
                $current_order[$j][0]=$row["customer_order"];
                $current_order[$j][1]=$row["to_address"];
                $current_order[$j][2]=$row["deliver_order"];
                $j++;
            }

    }
    $myJSON = json_encode($current_order);
    echo $myJSON;
    mysqli_free_result($result);
    mysqli_free_result($dresult);


?>