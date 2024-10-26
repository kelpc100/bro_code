<?php
    session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.php" method="post">
        username:<br>
        <input type="text" name="username"><br>
        <input type="submit" name="login" value="login"><br>
    </form>
    <br>
</body>
</html>

<?php
    if(isset($_POST["login"])){
        $_SESSION["username"] = $_POST["username"];
        
        if(!empty($_POST["username"])){
            echo $_SESSION["username"] . "<br>";

            header("Location: home.php");

        } else{
            echo "Missing username";
        }
    }

?>