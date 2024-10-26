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
    <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]) ?>" method="post">
        <h2>Welcome to Fakebook!</h2>
        username:<br>
        <input type="text" name="username"><br>
        password:<br>
        <input type="password" name="password"><br>
        <input type="submit" name="submit" value="register">
    </form>
</body>
</html>

<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $username = filter_input(INPUT_POST, "username", FILTER_SANITIZE_SPECIAL_CHARS);
        $password = filter_input(INPUT_POST, "password", FILTER_SANITIZE_SPECIAL_CHARS);

        if(empty($username)){
            echo"Please enter a username";
            
        }elseif(empty($password)){
            echo"Please enter a password";

        }else{
            try{
                mysqli_query($con, user_insert($username, $password));
                echo"User is now registered";
            }
            catch(mysqli_sql_exception){
                echo"Could not register user";
            }
        }
    
    }

    function user_insert($user, $pass){
        $hash = password_hash($pass, PASSWORD_DEFAULT);
        return "INSERT INTO users (username, password)
                    VALUES ('$user', '$hash')";
    }

    mysqli_close($con);
?>