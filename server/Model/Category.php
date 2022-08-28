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
            case 'GET':
                $sql = "
                        SELECT category_id, name AS category, sub_name AS sub_category
                        FROM sub_category
                        INNER JOIN category c on sub_category.category_id = c.id
                        ORDER BY category_id
                        ";
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                $data = $stmt->fetchAll(PDO::FETCH_GROUP | PDO::FETCH_ASSOC);
                echo json_encode($data);
                break;
        }
}
}

$category = new Category();
$category->render();