<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Form</title>
</head>
<body>
    <form action="order_form.php" method="post">
        <label>Quantity: </label>
        <br>
        <input type="text" name="quantity">
        <input type="submit" value="Total">
        <br>

    </form>
</body>
</html>

<?php
    $item  = "pizza";
    $price = 5.99;
    $quantity = $_POST["quantity"];
    $total = $quantity * $price;
    echo"You have ordered {$quantity} {$item}s <br>";
    echo"Total: \${$total}";
?>