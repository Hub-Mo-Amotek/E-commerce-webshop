<?php
    header("Access-Control-Allow-Origin: *");
    //header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Content-Type: application/json; charset=utf-8');
require '../db.php';
class Products extends DataConnection {
    public function render() {
        $method = $_SERVER['REQUEST_METHOD'];
        switch($method){
            case 'GET':
                $sql = "SELECT id,name,primary_image, price FROM product WHERE quantity > 0 ";//LIMIT 4
                $stmt = $this->connect()->prepare($sql);
                $stmt->execute();
                $allProductsData = $stmt->fetchAll(PDO::FETCH_ASSOC);
                echo json_encode($allProductsData);
                break;
        }

    }
}
$category = new Products();
$category->render();