<?php



class HomeController {

    public function render() {

        $connection = new DataConnection();
        $db = $connection->connect();

            $method = $_SERVER['REQUEST_METHOD'];
    switch($method){
        case 'POST':
            $user = json_decode(file_get_contents('php://input'));
            $sql = "INSERT INTO user (first_name, last_name, email, password) VALUES (:first_name, :last, :email, :password)";
            $stmt = $db->prepare($sql);
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
            break;
            case 'GET':
                $sql = "SELECT * FROM user";
                $stmt = $db->prepare($sql);
                $stmt->execute();
                $users = $stmt->fetchAll(PDO::FETCH_ASSOC);        
                echo json_encode($users);
            break;
    
}
    }
        }
        ?>