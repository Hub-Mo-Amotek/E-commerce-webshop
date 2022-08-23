<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

require '../db.php';


class User extends DataConnection {
    public function render() {


        $method = $_SERVER['REQUEST_METHOD'];
        switch($method){
            case 'POST':
                $user = json_decode(file_get_contents('php://input'));
                $sql = "INSERT INTO user (first_name, last_name, email, password) VALUES (:first_name, :last, :email, :password)";
                $stmt = $this->connect()->prepare($sql);
                $date = date('Y-m-d');
                $stmt->bindParam(':first_name', $user->first_name);
                $stmt->bindParam(':last', $user->last_name);
                $stmt->bindParam(':email', $user->email);
                $stmt->bindParam(':password', $user->password);
                if($stmt->execute()) {
                    $data = ['status' => 1, 'message' => "Record successfully created"];
                } else {
                    $data = ['status' => 0, 'message' => "Failed to create record."];
                }
                echo json_encode($data);
        }
}
}

$category = new User();
$category->render();
/*"localhost", 'becode', "becode", "gbay_db"*/
