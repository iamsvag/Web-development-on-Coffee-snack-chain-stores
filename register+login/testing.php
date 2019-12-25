<?php
    $pass = "11435677";
    $pass = password_hash($pass, PASSWORD_DEFAULT);
echo $pass;

/*INSERT INTO shops_phone VALUES("Κατάστημα Νοταρά", "2610985436");

INSERT INTO shop VALUES ("Κατάστημα Νοταρά", "38.263117", "21.743875", "Νοταρά", "14", "managerNotara", "01434567590", "22345678900", "GR1234556789843214567898876", "Ηλίας", "Πίτσικας", "$2y$10$41C2Nen4CwpJo0fFHQ6BGevzxQmwPF.QYw1vIFL.F1WhMMhR2dJEO");

INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Ελληνικός", "9", "1.10");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Φραπέ", "9", "1.20");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Εσπρέσσο", "9", "1.30");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Καπουτσίνο", "9", "1.50");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Φίλτρου", "9", "1.30");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Τυρόπιτα", "9", "1.00");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Χορτόπιτα", "9", "1.10");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Κουλούρι", "9", "0.50");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Τοστ", "9", "1.00");
INSERT INTO products VALUES("Κατάστημα Γενναδίου", "Κέικ", "9", "0.70");

*/

$link = new mysqli('localhost', 'root', '', 'dbweb');
mysqli_set_charset($link, "utf8");
    if (mysqli_connect_errno()) {
            //printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }



if ($result = mysqli_query($link, "SELECT man_fname, man_lname, man_amka, man_afm, man_iban, profits FROM shop")) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo $row["man_fname"];
        }
}

?>