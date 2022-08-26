<?php

require '../db.php';

class HomeController extends DataConnection {

    public function render() {

            $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'GET':
            $sql = "SELECT * FROM user";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            if(isset($path[3]) && is_numeric($path[3])) {
                $sql .= " WHERE id = :id";
                $stmt = $this->connect()->prepare($sql);
                $stmt->bindParam(':id', $path[3]);
                $stmt->execute();
                $users = $stmt->fetch(PDO::FETCH_ASSOC);
            } else {
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
            }
            echo json_encode($users);
        break;
        // case 'POST':
        //     $user = json_decode(file_get_contents('php://input'));
        //     $sql = "INSERT INTO user (first_name, last_name, email, password) VALUES (:first_name, :last, :email, :password)";
        //     $stmt = $db->prepare($sql);
        //     $date = date('Y-m-d');
        //     $stmt->bindParam(':first_name', $user->first_name);
        //     $stmt->bindParam(':last', $user->last_name);
        //     $stmt->bindParam(':email', $user->email);
        //     $stmt->bindParam(':password', $user->password);
        //     if($stmt->execute()) {
        //         $data = ['status' => 1, 'message' => "Record successfully created"];
        //     } else {
        //         $data = ['status' => 0, 'message' => "Failed to create record."];
        //     }
        //     echo json_encode($data);
        // break;
        case 'PUT':
            $user = json_decode(file_get_contents('php://input'));
            $sql = "UPDATE user SET first_name = :first_name, last_name = :last , email = :email, password = :password WHERE id = :id";
            $stmt = $this->connect()->prepare($sql);
            $date = date('Y-m-d');
            $stmt->bindParam(':id', $user->id);
            $stmt->bindParam(':first_name', $user->first_name);
            $stmt->bindParam(':last', $user->last_name);
            $stmt->bindParam(':email', $user->email);
            $stmt->bindParam(':password', $user->password);
            if($stmt->execute()) {
                $data = ['status' => 1, 'message' => "Record updated successfully created"];
            } else {
                $data = ['status' => 0, 'message' => "Failed to update record."];
            }
            echo json_encode($data);
        break;
        case "DELETE":
            $sql = "DELETE FROM user WHERE id = :id";
            $path = explode('/', $_SERVER['REQUEST_URI']);
            
                $stmt = $this->connect()->prepare($sql);
                $stmt->bindParam(':id', $path[3]);

                if($stmt->execute()) {
                    $data = ['status' => 1, 'message' => 'Deleted successfully.'];
                } else {
                    $data = ['status' => 0, 'message' => 'Failed to delete.'];
                }
                echo json_encode($data);
            break;
        }
    }};