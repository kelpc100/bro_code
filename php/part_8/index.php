<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Part Eight</title>
</head>
<body>
    <form action="index.php" method="post">
        <label>Enter a country: </label>
        <input type="text" name="country">
        <input type="submit">
    </form>
</body>
</html>

<?php
    $capitals = array("USA"=>"Las Vegas",
                                   "Japan"=>"Kyoto",
                                   "Australia"=>"Canberra",
                                   "India"=>"New Delhi");

    $capital = $capitals[$_POST["country"]];    
    echo"The capital is {$capital}<br><br>";

    $capitals["USA"] = "Washington D.C.";
    $capitals["China"] = "Beijing";
    //array_shift($capitals);
    //array_pop($capitals);
    //$keys = array_keys($capitals);
    //$values = array_values($capitals);
    //$capitals = array_flip($capitals);
    //$capitals = array_reverse($capitals);
    //echo count($capitals);

    foreach($capitals as $key => $value){
        echo "{$value} is the capital of {$key}<br>";
    }
?>