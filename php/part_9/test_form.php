<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="test_form.php" method="post">
        <label>username: </label>
        <br>
        <input type="text" name="username">
        <br>
        <label>password: </label>
        <br>
        <input type="password" name="password">
        <br>
        <input type="submit" name="login" value="Log In">
        <br>
        <br>
    </form>
</body>
</html>
<?php
    foreach($_POST as $key => $value){
        echo "{$key} is {$value}<br>";
    }

    if(isset($_POST["login"])){
        
        $username = $_POST["username"];
        $password = $_POST["password"];

        if(empty($username)){
            echo"Username is missing";
        }
        elseif(empty($password)){
            echo"Password is missing";
        }
        else{
            echo"Hello {$username}";
        }
    }
?>