<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Radius</title>
</head>
<body>
    <form action="radius.php" method="post">
        <label>Radius: </label>
        <input type="text" name="radius">
        <input type="submit" value="Calculate">
        <br>
    </form>
    
</body>
</html>

<?php
    $radius = $_POST["radius"];
    $circum = round(2 * pi() * $radius, 2);
    $area = round(pi() * pow($radius, 2), 2);
    $vol = round((4/3) * pi() * pow($radius, 3), 2);

    echo"Circumference is {$circum} <br>";
    echo"Area is {$area} <br>";
    echo"Volume is {$vol} <br>";

?>