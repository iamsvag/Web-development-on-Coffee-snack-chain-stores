<?php
session_start();
if ((isset($_POST['shop_name'])) && (isset($_POST['updated_0'])) && (isset($_POST['updated_1'])) && (isset($_POST['updated_2']))&& (isset($_POST['updated_3']))&& (isset($_POST['updated_4']))){
  
 $link = new mysqli('localhost', 'root', '', 'dbweb');
 $shop_name=$_POST['shop_name'];
    $shop_name = mysqli_real_escape_string($link, $shop_name);

   $updated_0=$_POST['updated_0'];
    $updated_0 = mysqli_real_escape_string($link, $updated_0);
    $updated_1=$_POST['updated_1'];
    $updated_1 = mysqli_real_escape_string($link, $updated_1);
    $updated_2=$_POST['updated_2'];
    $updated_2 = mysqli_real_escape_string($link, $updated_2);
    $updated_3=$_POST['updated_3'];
    $updated_3 = mysqli_real_escape_string($link, $updated_3);
    $updated_4=$_POST['updated_4'];
    $updated_4 = mysqli_real_escape_string($link, $updated_4);
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    mysqli_set_charset($link, "utf8");
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Κέικ' AND shop_name='$shop_name' ")){
        $row = mysqli_fetch_assoc($result);
            $q0 = $row["quantity"];

    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Κουλούρι' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $q1 = $row["quantity"];
    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Τοστ' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $q2 = $row["quantity"];
    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Χορτόπιτα' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $q3 = $row["quantity"];
    }
    if ( $result = mysqli_query($link, " SELECT quantity FROM products WHERE product='Τυρόπιτα' AND shop_name='$shop_name' ")){
         $row = mysqli_fetch_assoc($result);
            $q4 = $row["quantity"];
            

    }

    (int)$q0 = (int)$q0 + (int)$updated_0;
    (int)$q1 = (int)$q1 + (int)$updated_1;
    (int)$q2 = (int)$q2 + (int)$updated_2;
    (int)$q3 = (int)$q3 + (int)$updated_3;
    (int)$q4 = (int)$q4 + (int)$updated_4;

        if ( mysqli_query($link, "UPDATE products SET quantity = '$q0' WHERE product='Κέικ' AND shop_name='$shop_name' ")){

                        echo $q0;
                    }
                    if ( mysqli_query($link, "UPDATE products SET quantity = '$q1' WHERE  product='Κουλούρι' AND shop_name='$shop_name' ")){

                        echo $q1;
                    }
                    if ( mysqli_query($link, "UPDATE products SET quantity = '$q2' WHERE product='Τοστ' AND shop_name='$shop_name' ")){

                        echo $q2;
                    }
                    if ( mysqli_query($link, "UPDATE products SET quantity = '$q3' WHERE product='Χορτόπιτα' AND shop_name='$shop_name' ")){

                        echo $q3;
                    }
                    if ( mysqli_query($link, "UPDATE products SET quantity = '$q4' WHERE product='Τυρόπιτα' AND shop_name='$shop_name' ")){

                        echo $q4;

                    }

    mysqli_free_result($result);

}
?>