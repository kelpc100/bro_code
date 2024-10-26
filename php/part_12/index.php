<?php
    function hello($name){
        echo"Hello {$name}";
    }
    hello("test");

    function hypotenuse(float $a, float $b){
        $c = sqrt($a ** 2 + $b ** 2);
        return $c;
    }
    echo"<br>";
    echo hypotenuse(3, 4);
    echo"<br>";

    function happy_birthday($name, $age){
        echo"Happy Birthday {$name}!<br>";
        echo"You are {$age} years old<br>";
    }
    happy_birthday("test", 10);

    function is_even($number){
        return $number % 2;
    }
    echo is_even(3);
    echo"<br>";




    $username = array("Bro","The","Code");
    $phone = "123-456-7890";

    //$username = strtolower($username);
    //$username = strtoupper($username);
    //$username = trim($username);
    //$username = str_pad($username, 20, "0");
    //$phone = str_replace("-", "", $phone);
    //$username = strrev($username);
    //$username = str_shuffle($username);
    //$equals = strcmp($username, "Bro Code");
    //$count = strlen($phone);
    //$index = strpos($phone, "-");
    //$firstname = substr($username, 0, 3);
    //$lastname = substr($username, 4);
    //$fullname = explode(" ", $username);
    $username = implode(" ", $username);

    /*
    echo"<br>";
    echo $firstname;
    echo"<br>";
    echo $lastname;
    echo"<br>";
    foreach($fullname as $name){
        echo $name . "<br>";
    }
    */
    echo $username;
?>