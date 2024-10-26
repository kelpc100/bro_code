<?php
    // isset() = Returns TRUE if a variable is declared and not null
    // empty() = Returns TRUE if a variable is not declared, false, null, ""    
    
    $username = "BroCode";
    //echo isset($username);
    //$username = null;
    //echo isset($username);

    if(isset($username)){
        echo "This variable is set<br>";
    }
    else{
        echo "This variable is not set<br>";
    }

    if(empty($username)){
        echo "This variable is empty<br>";
    }
    else{
        echo "This variable is not empty<br>";
    }

?>