<?php 

if ( (isset($_POST['year']))  && (isset($_POST['month'])) ){
       
    $link = new mysqli('localhost', 'root', '', 'dbweb');
    if (mysqli_connect_errno()) {
            //printf("Connect failed: %s\n", mysqli_connect_error());
            exit();
        }
    mysqli_set_charset($link, "utf8");
    $year=$_POST['year'];
   // $year = mysqli_real_escape_string($link, $year);
    $month=$_POST['month'];
    //$month = mysqli_real_escape_string($link, $month);
   // echo $month;
    //$link = new mysqli('localhost', 'root', '', 'dbweb');
 //Creates XML string and XML document using the DOM 
    $dom = new DomDocument('1.0', 'UTF-8'); 

    //add root
    $root = $dom->appendChild($dom->createElement('xml'));

    //add NodeA element to Root
    $node_header = $dom->createElement('header');
    $root->appendChild($node_header);
   
    $node_transaction = $dom->createElement('transaction');
    $node_header->appendChild($node_transaction);
    
    $node_period = $dom->createElement('period');
    $node_transaction->appendChild($node_period);
    // Appending attr1 and attr2 to the NodeA element
    $attr = $dom->createAttribute('month');
    $attr->value = $month;
    $node_period->appendChild($attr);
    
    $attr = $dom->createAttribute('year');
    $attr->value = $year;
    //$attr->appendChild($dom->createTextNode('some text'));
    $node_period->appendChild($attr);

    
    $node_body = $dom->createElement('body');
    $root->appendChild($node_body);
    
    $node_employees = $dom->createElement('employees');
    $node_body->appendChild($node_employees);
    
    
    if ($result = mysqli_query($link, "SELECT man_fname, man_lname, man_amka, man_afm, man_iban, profits FROM shop")) {
        while ($row = mysqli_fetch_assoc($result)) {
            $man_fname = $row["man_fname"];
            $man_lname = $row["man_lname"];
            $man_amka = $row["man_amka"];
            $man_afm = $row["man_afm"];
            $man_iban = $row["man_iban"];
            $profits = $row["profits"];
            $salary = 800 + 2 * $profits / 100;
            //echo $salary;
            $node_employee = $dom->createElement('employee');
            $node_employees->appendChild($node_employee);
            
            $node_fname = $dom->createElement('firstName', $man_fname);
            $node_employee->appendChild($node_fname);
            
            $node_lname = $dom->createElement('lastName', $man_lname);
            $node_employee->appendChild($node_lname);
            
            $node_amka = $dom->createElement('amka', $man_amka);
            $node_employee->appendChild($node_amka);
            
            $node_afm = $dom->createElement('afm', $man_afm);
            $node_employee->appendChild($node_afm);
            
            $node_iban = $dom->createElement('iban', $man_iban);
            $node_employee->appendChild($node_iban);
            
            $node_ammount = $dom->createElement('ammount', $salary);
            $node_employee->appendChild($node_ammount);
        }
    }
    mysqli_free_result($result);
    
    if ($result = mysqli_query($link, "SELECT fname, lname, amka, afm, iban, kms, work_hours FROM deliverman")) {
        while ($row = mysqli_fetch_assoc($result)) {
            $fname = $row["fname"];
            $lname = $row["lname"];
            $amka = $row["amka"];
            $afm = $row["afm"];
            $iban = $row["iban"];
            $kms = $row["kms"];
            $work_hours = $row["work_hours"];
            $salary = 5 * $work_hours + 0.1 * $kms;
            //echo $salary;
            $node_employee = $dom->createElement('employee');
            $node_employees->appendChild($node_employee);
            
            $node_fname = $dom->createElement('firstName', $fname);
            $node_employee->appendChild($node_fname);
            
            $node_lname = $dom->createElement('lastName', $lname);
            $node_employee->appendChild($node_lname);
            
            $node_amka = $dom->createElement('amka', $amka);
            $node_employee->appendChild($node_amka);
            
            $node_afm = $dom->createElement('afm', $afm);
            $node_employee->appendChild($node_afm);
            
            $node_iban = $dom->createElement('iban', $iban);
            $node_employee->appendChild($node_iban);
            
            $node_ammount = $dom->createElement('ammount', $salary);
            $node_employee->appendChild($node_ammount);
        }
    }
    mysqli_free_result($result);
    
    
    if ( mysqli_query($link, "UPDATE deliverman SET kms = '0'")){
        if ( mysqli_query($link, "UPDATE deliverman SET work_hours = '0'")){
            if ( mysqli_query($link, "UPDATE shop SET profits = '0'")){
            }
        }
    }

    
    /*
** insert more nodes
*/

    $dom->formatOutput = true; // set the formatOutput attribute of domDocument to true

    // save XML as string or file 
   //$test1 = $dom->saveXML(); // put string in test1
    $dom->save('xml/Salaries.xml'); // save as file
}
echo "XML completed and saved in xml/Salaries.xml!";
?>