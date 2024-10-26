<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Part Ten</title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="checkbox" name="pizza" value="Pizza">
        Pizza
        <br>
        <input type="checkbox" name="hamburger" value="Hamburger">
        Hamburger
        <br>
        <input type="checkbox" name="hot_dog" value="Hot Dog">
        Hot Dog
        <br>
        <input type="checkbox" name="taco" value="Taco">
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
        
        if(isset($_POST["pizza"])){
            echo"You selected pizza<br>";
        }
        if(isset($_POST["hamburger"])){
            echo"You selected hamburger<br>";
        }
        if(isset($_POST["hot_dog"])){
            echo"You selected hot dog<br>";
        }
        if(isset($_POST["taco"])){
            echo"You selected taco<br>";
        }
        if(empty($_POST["pizza"])){
            echo"You didn't select pizza<br>";
        }
        if(empty($_POST["hamburger"])){
            echo"You didn't select hamburger<br>";
        }
        if(empty($_POST["hot_dog"])){
            echo"You didn't select hot dog<br>";
        }
        if(empty($_POST["taco"])){
            echo"You didn't select taco<br>";
        }
    }
?>
