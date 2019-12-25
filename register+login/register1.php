<?php
session_start();
//echo "phsp";
//if (isset($_POST['register_button'])){
if (    (isset($_POST['pass']))  && (isset($_POST['email']))  && (isset($_POST['tel'])) ){
   $conn = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_error()) {
        die('Connect Error (' . mysqli_connect_errno() . ') '. mysqli_connect_error()); 
    }
    //echo "gamiesai";
    $pass=$_POST['pass'];
    $pass = mysqli_real_escape_string($conn, $pass);
    $pass = password_hash($pass, PASSWORD_DEFAULT);
    $email=$_POST['email'];
    $email = mysqli_real_escape_string($conn, $email);
    $tel=$_POST['tel'];
    $tel = mysqli_real_escape_string($conn, $tel);
    //echo "edwwwwwwwwwwww $tel $pass $email";
    if ($result = mysqli_query($conn, "SELECT * FROM customer WHERE email='$email'")) {

            /* An den uparxei apotelesma shmainei oti den uparxei to mail*/
        if (mysqli_num_rows($result) == 0){
                if (mysqli_query($conn, "INSERT INTO customer(email, pass) VALUES ('$email', '$pass')")) {
                    if (mysqli_query($conn, "INSERT INTO customers_phone(customer_phone, phone_nr) VALUES ('$email', '$tel')")) {
                        $_SESSION['login_email'] = $email;
                        echo 1;
                        //header("location:regsucc.php");
                    }
                }
        }
        else{
            //Email already exists
            echo 0;
        }
    }   
            mysqli_close($conn);
}

?>