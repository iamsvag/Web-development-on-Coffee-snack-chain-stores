<?php
session_start();

   $link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }

    mysqli_set_charset($link, "utf8");
    if ($result = mysqli_query($link, "SELECT name FROM shop WHERE man_username='{$_SESSION['manager']}'")) {
        $row = mysqli_fetch_assoc($result);
        $shop_name = $row["name"];
    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Κέικ' AND shop_name='$shop_name' ")){
        $row = mysqli_fetch_assoc($result);
            $current_quantity[0] = $row["quantity"];

    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Κουλούρι' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $current_quantity[1] = $row["quantity"];
    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Τοστ' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $current_quantity[2] = $row["quantity"];
    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Χορτόπιτα' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $current_quantity[3] = $row["quantity"];
    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Τυρόπιτα' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $current_quantity[4] = $row["quantity"];
    }
    $myJSON = json_encode($current_quantity);
    echo $myJSON;
    mysqli_free_result($result);


?>