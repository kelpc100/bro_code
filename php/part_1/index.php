<?php
    echo"Hello!<br>";
    echo"Second line<br>";
    //This is a comment
    /*
    this is a multi-line comment
    */

    $name = "Bro Code";
    echo $name;
    echo"<br>Hello {$name}<br>";

    $food = "Pizza";
    echo"You like {$food}<br>";

    $age = 21;
    echo"You are {$age}<br>";

    $users = 123;
    echo"There are {$users} users online<br>";

    $gpa = 2.5;
    echo"Your gpa is: {$gpa}<br>";

    $price = 4.99;
    echo"Your pizza is \${$price}<br>";

    $tax_rate = 5.1;
    echo"The sales tax is {$tax_rate}%<br>";

    $student = true;
    echo"is student? {$student} <br>";
    $online = false;
    echo $online;

    $quantity = 3;
    $total = null;
    echo"You have ordered {$quantity} x {$food}s <br>";
    $total = $quantity * $price;
    echo"Your total is \${$total} <br>";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <br>
    <br>
    <button>order pizza</button>
    
</body>
</html>