<?php

session_start();
if ( (isset($_POST['order_details'])) && (isset($_POST['suitable_shop'])) && (isset($_POST['suitable_deliver'])) && (isset($_POST['kms_final'])) && (isset($_POST['total_price'])) && (isset($_POST['k'])) && (isset($_POST['toaddress'])) ){
   $link = new mysqli('localhost', 'root', '', 'dbweb');
   mysqli_set_charset($link, "utf8");
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    $kms_final=$_POST['kms_final'];
    $order_details=$_POST['order_details'];
    $suitable_shop=$_POST['suitable_shop'];
    $suitable_deliver=$_POST['suitable_deliver'];
    $total_price=$_POST['total_price'];
    $k=$_POST['k'];
    $toaddress=$_POST['toaddress'];
    $toaddress = mysqli_real_escape_string($link, $toaddress);
    $k = mysqli_real_escape_string($link, $k);
    $total_price = mysqli_real_escape_string($link, $total_price);
    $kms_final = mysqli_real_escape_string($link, $kms_final);
    $order_details = mysqli_real_escape_string($link, $order_details);
    $suitable_shop = mysqli_real_escape_string($link, $suitable_shop);
    $suitable_deliver = mysqli_real_escape_string($link, $suitable_deliver);
	$order_det = explode(".", $order_details);
	//echo $order_det[1];
	//echo "\n";
	$proionta = ['Ελληνικός', 'Φραπέ', 'Εσπρέσσο', 'Καπουτσίνο', 'Φίλτρου', 'Κέικ', 'Κουλούρι', 'Τοστ', 'Τυρόπιτα', 'Χορτόπιτα'];

	//$proionta[$order_det[$i]%10])//product
	//pquantity=(int)($order_det[$i]/10);//quantiy
    //echo $kms_final, "\n\n\n";

	if ( $result=mysqli_query($link, "SELECT kms FROM deliverman WHERE username='$suitable_deliver'") ){
		$row = mysqli_fetch_assoc($result);
		$kms_final = $kms_final + floatval($row["kms"]);
		
	}
	if ( $result1=mysqli_query($link, "SELECT profits FROM shop WHERE name='$suitable_shop'") ){
		$row = mysqli_fetch_assoc($result1);
		$total_price = $total_price + floatval($row["profits"]);
		//echo $total_price;
	}
                                    //echo $toaddress;

	if ( mysqli_query($link, "UPDATE shop SET profits='$total_price' WHERE name='$suitable_shop'") ){
		if ( mysqli_query($link, "UPDATE deliverman SET kms='$kms_final' WHERE username='$suitable_deliver'") ){
			if ( mysqli_query($link, "INSERT INTO orders(customer_order, shop_name, deliver_order, order_details, to_address) VALUES ('{$_SESSION['login_email']}', '$suitable_shop', '$suitable_deliver', '$order_details', '$toaddress')") ){
    			echo "111";
                if ($result1 = mysqli_query($link, "SELECT product, quantity FROM products WHERE shop_name='$suitable_shop'")) {
            /* An den uparxei apotelesma shmainei oti den uparxei to mail*/
   
                /* H diaxeirish twn apotelesmatwn ginetai me thn fetch_assoc()*/
                
                while($row = mysqli_fetch_assoc($result1)){
                   for ($i = 0; $i < $k; $i++){
                   	                   	
                   	if (($order_det[$i]%10) > 4){
                    	if ($row["product"] == $proionta[$order_det[$i]%10]){
                    		$pquantity[$i]=(int)($order_det[$i]/10);
                    		//echo "asdasdasd   ";
                    		//echo $pquantity[$i];
                    		$pquantity1=$row["quantity"] - $pquantity[$i];
                    		//echo "\n";
                    		//echo $pquantity1;
                    		$product1=$proionta[$order_det[$i]%10];
                    		if ( mysqli_query($link, "UPDATE products SET quantity='$pquantity1' WHERE shop_name='$suitable_shop' AND product='$product1'") ){
								echo "111";
							}
                    	} 
                	}
            	  }
               }
      
        
            
            
            mysqli_free_result($result1);
            
        }
    			
    		}
		}
	}
    else{
    	echo("Error description: " . mysqli_error($link));
    }
}
  

?>