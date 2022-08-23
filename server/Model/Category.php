<?php

    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    require '../db.php';


class Category extends DataConnection {

    public function render() {

        $method = $_SERVER['REQUEST_METHOD'];
        switch($method){
        case 'POST':
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO category (name, description) VALUES (:name, :description)";
            $stmt = $this->connect()->prepare($sql);
            $date = date('Y-m-d');
            $stmt->bindParam(':name', $user->name);
            $stmt->bindParam(':description', $user->description);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record successfully created"];
            } else {
                $data = ['status' => 0, 'message' => "Failed to create record."];
            }
            echo json_encode($data);
        break;
        }
}
}

$category = new Category();
$category->render();