<?php
    session_start();

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
    <form action="home.php" method="post">
        <input type="submit" name="logout" value="logout"><br>
    </form>
    <br>
</body>
</html>

<?php
    echo "Hello {$_SESSION["username"]}<br>";

    if(isset($_POST["logout"])){
        session_destroy();
        header("Location: index.php");
    }

?>