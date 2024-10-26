<?php
    $age = 25;
    if ($age >= 21){
        echo"can drink";
    }
    elseif($age < 0){
        echo"fake age";

    }
    else{
        echo"cannot drink";
    }

    $hours = -41;
    $rate = 15;
    $pay = null;
    if ($hours < 0){
        echo"<br>Hour error";
    }
    elseif($hours > 40){
        $pay = (40 * $rate) + (($hours - 40) * (1.5 * $rate));
        echo"<br> Weekly pay = \${$pay}";
    }
    else{
        $pay = $hours * $rate;
        echo"<br> Weekly pay = \${$pay}";
    }




    $a = true;
    $b = false;
    // AND operator
    if ($a && $b) {
    echo "<br>Both are true.";
    } else {
        echo "<br>At least one is false."; // This will be printed
    }

    // OR operator
    if ($a || $b) {
        echo "<br>At least one is true."; // This will be printed
    } else {
        echo "<br>Both are false.";
    }

    // NOT operator
    if (!$b) {
        echo "<br>b is false."; // This will be printed
    } else {
        echo "<br>b is true.";
    }
    
    $citizen = true;
    if ($age >= 18 && $citizen) {
        echo "<br>You can vote.";
    } else{
        echo "<br>You cannot vote."; // This will be printed
    }
    if ($age >= 18 || !$citizen) {
        echo "<br>You cannot vote.";
    } else{
        echo "<br>You can vote."; // This will be printed
    }




    $day = 3;
    switch ($day) {
        case 1:
            echo "<br>Monday";
            break;
        case 2:
            echo "<br>Tuesday";
            break;
        case 3:
            echo "<br>Wednesday"; // This will be printed
            break;
        case 4:
            echo "<br>Thursday";
            break;
        case 5:
            echo "<br>Friday";
            break;
        case 6:
            echo "<br>Saturday";
            break;
        case 7:
            echo "<br>Sunday";
            break;
        default:
            echo "<br>Invalid day"; // If $day is not between 1 and 7
    }

    $grade = -5;
    switch ($grade) {
        case $grade >= 90:
            echo "<br>A";
            break;
        case $grade >= 80:
            echo "<br>B";
            break;
        case $grade >= 70:
            echo "<br>C";
            break;
        case $grade >= 60:
            echo "<br>D";
            break;
        case $grade >= 0:
            echo "<br>F";
            break;
        default:
            echo "<br>Invalid grade";
    }




    for ($i = 1; $i <= 10; $i++) {
        echo "Number: " . $i . "<br>";
    }

    for ($i = 1; $i <= 3; $i++) {
        echo "Hello <br>";
    }

    for ($i = 10; $i >= 1; $i--) {
        echo "Number: " . $i . "<br>";
    }

    for ($i = 1; $i <= 10; $i+=2) {
        echo "Number: " . $i . "<br>";
    }

    for ($i = 10; $i >= 1; $i-=3) {
        echo "Number: " . $i . "<br>";
    }
?>