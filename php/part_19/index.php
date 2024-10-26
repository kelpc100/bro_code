<?php
    include("db.php");
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Hello
    <br>
</body>
</html>

<?php
    /*
    $username = "Patrick";
    $password = "rock1";
    $hash = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (username, password)
            VALUES ('$username', '$hash')";

    try{
        mysqli_query($con, $sql);
        echo"User is now registered";
    }
    catch(mysqli_sql_exception){
        echo"Could not register user";
    }
    */

    $sql = "SELECT * FROM users WHERE username = 'Spongebob'";
    $result = mysqli_query($con, $sql);

    if(mysqli_num_rows($result) > 0){
        $row = mysqli_fetch_assoc($result);
        echo $row["id"] . "<br>";
        echo $row["username"] . "<br>";
        echo $row["creation"] . "<br>";
    }
    else{
        echo"No user found";
    }

    mysqli_close($con);
?>