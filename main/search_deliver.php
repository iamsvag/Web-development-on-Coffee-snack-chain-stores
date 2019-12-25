<?php
session_start();
$link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    mysqli_set_charset($link, "utf8");
    $y=0;//metriths wste na ksekinaei o prwtos suitable sth 8esh 0 logw la8ous stis apostaseis
    $positions = array("", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "");
    if ($dresult = mysqli_query($link, "SELECT username, current_position FROM deliverman WHERE availability=1")) {
                         $j=0;
                         for($k = 0; $k < mysqli_num_rows($dresult); $k++){
                         $drow = mysqli_fetch_assoc($dresult);
                         $check_suitable_deliver=$drow["username"];
                         //echo $check_suitable_deliver;
                        if ($delsuitresult = mysqli_query($link, "SELECT * FROM orders WHERE deliver_order='$check_suitable_deliver'")) {
                            //echo "ασδασδασδ\n";
                        
                            //echo "\n";
                            //echo "\n";
                            if (mysqli_num_rows($delsuitresult)==0){
                                $positions[$y]=(string)$drow["current_position"];
                                //$positions[$j]="../../";
                                $positions[$y+12]=(string)$drow["username"]; 
                                $y++;
                            }
                            ////echo $drow["username"];
                            ////echo "$positions[$j] \n";
                            
                          }  //echo "\n";
                         }

                         $myJSON = json_encode($positions);
                         echo $myJSON;
                         for($i = 0; $i < 7; $i++){
                            //echo "$positions[$i]\n";
                         }
                         //echo json_encode($positions, JSON_FORCE_OBJECT);
						 ////echo $myJSON;
                    }
                    mysqli_free_result($dresult);
?>