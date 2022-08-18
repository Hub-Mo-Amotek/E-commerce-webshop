<?php

class DataConnection {


            private $server = 'localhost';
            private $dbname = 'gbay_db';
            private $user = 'becode';
            private $pass = 'becode';
            
            public function connect(){
                try {
                    $conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
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
