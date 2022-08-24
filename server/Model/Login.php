<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
require '../db.php';


class Login extends DataConnection {

    public function render(){
        $logData = json_decode(file_get_contents('php://input'));
        $sql = "SELECT * FROM user WHERE (email = :email) AND (password = :password)";
        $stmt = $this->connect()->prepare($sql);
        $stmt->bindParam(':email', $logData->email);
        $stmt->bindParam(':password', $logData->password);
        $stmt->execute();
        $user = $stmt->fetch(PDO::FETCH_ASSOC);
        if($stmt->execute()) {
            $data = ['status' => 1, 'message' => "Record successfully created"];
        } else {
            $data = ['status' => 0, 'message' => "Failed to find user."];
        }
        echo json_encode($user);
    }
}

$log = new Login();
$log->render();