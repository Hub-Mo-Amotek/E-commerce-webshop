<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    //header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Content-Type: application/json; charset=utf-8');
require '../db.php';
class DisplayCategoryData extends DataConnection {
    public function render() {
        $method = $_SERVER['REQUEST_METHOD'];
        switch($method){
            
            case 'GET':
                    $sql = "SELECT id,name,primary_image,price FROM product WHERE quantity > 0 ";
                    $path = explode('/', $_SERVER['REQUEST_URI']);
                    //  print_r($path[5]);
                    if(isset($path[5]) && is_numeric($path[5])) {
                        $sql .= " AND category_id = :id";
                    // print_r($sql);
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->bindParam(':id', $path[5]);
                        $stmt->execute();
                        $allProductsData = $stmt->fetchALL(PDO::FETCH_ASSOC);
                        //print_r($allProductsData);
                    } else{               
                        $stmt = $this->connect()->prepare($sql);
                        $stmt->execute();
                        $allProductsData = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    }
                
                echo json_encode($allProductsData);
                break;
        }

    }
}
$category = new DisplayCategoryData();
$category->render();