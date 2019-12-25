<?php
session_start();
   $link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    mysqli_set_charset($link, "utf8");
    $j=0;
if ($result = mysqli_query($link, "SELECT name, lat, lon FROM shop")) {
	while($row = mysqli_fetch_assoc($result)){
		$shops[$j]=$row["name"];
		$shops[$j+1]=$row["lat"];
		$shops[$j+2]=$row["lon"];
		$j=$j+3;
	}
}   
for($i=0; $i<$j; $i++){
	//echo "\n";
	//echo $shops[$i];
} 
$myJSON = json_encode($shops);
echo $myJSON;
?>