<?php
    $db_server = "localhost";
    $db_user = "root";
    $db_pass = "";
    $db_name = "my_db";

    try{
        $con = mysqli_connect($db_server, $db_user, $db_pass, $db_name);

    } catch(mysqli_sql_exception){
        echo "You NOT are connected!<br>";

    }

?>