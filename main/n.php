<?php
session_start();
//k=pli8os proiontwn paragelias
//ret=string kwdikopoihmeno gia thn paragelia

if ( (isset($_POST['ret'])) && (isset($_POST['minjarray'])) && (isset($_POST['k'])) && (isset($_POST['metriths_magaziwn'])) && (isset($_POST['s_shop'])) ) {
   $link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    mysqli_set_charset($link, "utf8");
    $ret=$_POST['ret'];
    $k=$_POST['k'];
    $ret = mysqli_real_escape_string($link, $ret);
    $metriths_magaziwn=$_POST['metriths_magaziwn'];
    $metriths_magaziwn = mysqli_real_escape_string($link, $metriths_magaziwn);
    $minjarray=$_POST['minjarray'];
    $s_shop=$_POST['s_shop'];
    for ($i = 0; $i < $metriths_magaziwn; $i++){
        $minjarray[$i] = mysqli_real_escape_string($link, $minjarray[$i]);
        $s_shop[$i] = mysqli_real_escape_string($link, $s_shop[$i]);

    }
    $order_det = explode(".", $ret);

    $proionta = ['Ελληνικός', 'Φραπέ', 'Εσπρέσσο', 'Καπουτσίνο', 'Φίλτρου', 'Κέικ', 'Κουλούρι', 'Τοστ', 'Τυρόπιτα', 'Χορτόπιτα'];
   $jj=0;
   for ($c=0; $c<$metriths_magaziwn; $c++){
    //echo $s_shop[$c], "\n";
   }
   for ($c=$metriths_magaziwn-1; $c>=0; $c--){
        //echo "sdfsdfsdfsdfsdfsdfsdfsdfsdfsdf   ", $s_shop[$c]; 

    //echo "c = ", $c;
    $shop = $minjarray[$c];
    //echo "minj ", $s_shop[$shop];
    $everything_you_need=0;
    if ($result = mysqli_query($link, "SELECT shop_name, product, quantity FROM products WHERE shop_name='$s_shop[$shop]'")) {
            /* An den uparxei apotelesma shmainei oti den uparxei to mail*/
            if (mysqli_num_rows($result) == 0){
                printf("Connect failed: %s\n", mysqli_connect_error());

            }
            else{
                /* H diaxeirish twn apotelesmatwn ginetai me thn fetch_assoc()*/
                
                while($row = mysqli_fetch_assoc($result)){
                   for ($i = 0; $i < $k; $i++){
                    if ( ($row["product"] == $proionta[$order_det[$i]%10]) && ($row["quantity"]) >= ((int)($order_det[$i]/10))) {
                        $everything_you_need++;
                    } 
                }
               }
                if ($everything_you_need == $k){

                    $most_s_shop = $s_shop[$shop];
    //echo $most_s_shop, "\n";

                    //goto a;
                }
        
            }
            
            //mysqli_free_result($result);
            
        }
      }
    
    
    echo $most_s_shop;
    mysqli_free_result($result);

    
}

?>