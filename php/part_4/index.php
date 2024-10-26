<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Part Four</title>
</head>
<body>
    <form action="index.php" method="post">
        <label>X: </label>
        <input type="text" name="x">
        <br>
        <label>Y: </label>
        <input type="text" name="y">
        <br>
        <label>Z: </label>
        <input type="text" name="z">
        <br>
        <input type="submit" value="Total">
    </form>

</body>
</html>

<?php
    $x = $_POST["x"];
    $y = $_POST["y"];
    $z = $_POST["z"];

    //$total = abs($x);
    //$total = round($x);
    //$total = ceil($x);
    //$total = floor($x);
    $total = max($x, $y, $z);
    //$total = min($x, $y, $z);
    //$total = sqrt($x);
    //$total = pow($x, $y);
    //$total = pi();
    //$total = rand(1, 6);

    echo $total;
?>