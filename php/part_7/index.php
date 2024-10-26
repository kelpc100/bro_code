<?php

    $foods = array("apple", "orange", "banana", "coconut");
    foreach ($foods as $food) {
        echo $food . "<br>";
    }

    //$foods[0] = "pineapple";
    //array_push($foods, "pineapple");
    //array_shift($foods);
    //array_pop($foods);
    $foods = array_reverse($foods);
    //echo count($foods);
    foreach ($foods as $food) {
        echo $food . "<br>";
    }
?>