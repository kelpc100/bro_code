<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Part Ten</title>
</head>
<body>
    <form action="foods_array.php" method="post">
        <input type="checkbox" name="foods[]" value="Pizza">
        Pizza
        <br>
        <input type="checkbox" name="foods[]" value="Hamburger">
        Hamburger
        <br>
        <input type="checkbox" name="foods[]" value="Hot Dog">
        Hot Dog
        <br>
        <input type="checkbox" name="foods[]" value="Taco">
        Taco
        <br>
        <input type="submit" name="confirm" value="Confirm">
        <br>
        <br>
    </form>
</body>
</html>

<?php
    if(isset($_POST["confirm"])){

        $foods = $_POST["foods"];
        foreach($foods as $food){
            echo $food . "<br>";
        }

        
    }
?>