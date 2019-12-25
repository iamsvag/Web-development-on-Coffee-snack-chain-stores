<?php
session_start();
    if ((isset($_POST['pass'])) && (isset($_POST['email'])) ){
    $link = new mysqli('localhost', 'root', '', 'dbweb');
        //echo "eleos\n";
        /* check connection */
        if (mysqli_connect_errno()) {
            printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }
        
        /*Pernaw tis kataxwrhseis tou xrhsth stis metavlites*/
        $email=$_POST['email'];
        $email = mysqli_real_escape_string($link, $email);
        $pass=$_POST['pass'];
        $pass = mysqli_real_escape_string($link, $pass);
        $delivercount=0;
 
        /* Select queries from customer*/
        if ($result = mysqli_query($link, "SELECT * FROM customer WHERE email='$email'")) {
           /* echo "\n";
            echo "\n";
            echo $pass;
            echo "\n";
            echo $email;
             echo "\n";
            echo "\n";*/
            /* An den uparxei apotelesma shmainei oti den uparxei to mail*/
            if (mysqli_num_rows($result) == 0){
                //printf("1Connect failed: %s\n", mysqli_connect_error());
                //echo "3";//empaine gia ligo sth main otan patousa eisodo me la8os dedomena
            }
            else{
                /* H diaxeirish twn apotelesmatwn ginetai me thn fetch_assoc()*/
                $row = mysqli_fetch_assoc($result);
                if (password_verify($pass, $row["pass"])) {
                    /*Swstos Kwdikos*/
                    echo "10";
                    

                    $_SESSION['login_email'] = $email;
                    //header("location: welcome.php");
                } 
                else {
                    /*La8os Kwdikos*/
                }
            }
            /*while ($row = mysqli_fetch_assoc($result)) {
                printf ("%s %s %s\n", $row["demail"], $row["dtel"], $row["dpass"]);
            }*/
            mysqli_free_result($result);
            
        }
         /* Select queries from deliverman*/
        if ($result = mysqli_query($link, "SELECT * FROM deliverman WHERE username='$email'")) {
            /* An den uparxei apotelesma shmainei oti den uparxei to mail*/
            if (mysqli_num_rows($result) == 0){
                //printf("2Connect failed: %s\n", mysqli_connect_error());

            }
            else{
                /* H diaxeirish twn apotelesmatwn ginetai me thn fetch_assoc()*/
                $row = mysqli_fetch_assoc($result);
                if (password_verify($pass, $row["pass"])) {
                    /*Swstos Kwdikos*/
                    //header("location: main.html");
                        echo 1;
                        $_SESSION['deliver'] = $email;
                    //echo "1";
                } 
                else {
                    /*La8os Kwdikos*/
                }
            }
            /*while ($row = mysqli_fetch_assoc($result)) {
                printf ("%s %s %s\n", $row["demail"], $row["dtel"], $row["dpass"]);
            }*/
            mysqli_free_result($result);
            
        }
         /* Select queries from manager*/
        if ($result = mysqli_query($link, "SELECT * FROM shop WHERE man_username='$email'")) {
            /* An den uparxei apotelesma shmainei oti den uparxei to mail*/
            if (mysqli_num_rows($result) == 0){
                //printf("3Connect failed: %s\n", mysqli_connect_error());

            }
            else{
                /* H diaxeirish twn apotelesmatwn ginetai me thn fetch_assoc()*/
                $row = mysqli_fetch_assoc($result);
                if (password_verify($pass, $row["man_pass"])) {
                    /*Swstos Kwdikos*/
                    //header("location: main.html");
                    $_SESSION['manager'] = $email;
                    echo "2";
                } 
                else {
                    /*La8os Kwdikos*/
                }
            }
            /*while ($row = mysqli_fetch_assoc($result)) {
                printf ("%s %s %s\n", $row["demail"], $row["dtel"], $row["dpass"]);
            }*/
            mysqli_free_result($result);
            
        }

        /* If we have to retrieve large amount of data we use MYSQLI_USE_RESULT 
        if ($result = mysqli_query($link, "SELECT * FROM City", MYSQLI_USE_RESULT)) {

            /* Note, that we can't execute any functions which interact with the
               server until result set was closed. All calls will return an
               'out of sync' error 
            if (!mysqli_query($link, "SET @a:='this will not work'")) {
                printf("Error: %s\n", mysqli_error($link));
            }
            mysqli_free_result($result);
        }*/

        mysqli_close($link);
    }
?>
