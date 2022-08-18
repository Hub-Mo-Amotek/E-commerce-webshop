<?php

class DataConnection {

            
            public function connect(){
                
                $server = $_ENV['MySQL_DB_HOST'];
                $user = $_ENV['MySQL_DB_USER_NAME'];
                $pass = $_ENV['MySQL_DB_PASSWORD'];
                $dbname = $_ENV['MySQL_DB_NAME'];

                try {
                    $conn = new PDO('mysql:host=' .$server .';dbname=' . $dbname, $user, $pass);
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    //echo "Database connected: ";
                    return $conn;
                } catch (\Exception $e) {
                    echo "Database Error: " . $e->getMessage();
                    var_dump('connection to database failed');
                }

            }


        
}
?>
