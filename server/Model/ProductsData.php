<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Content-Type: application/json; charset=utf-8');
require '../db.php';
class Products extends DataConnection {
    public function render() {
        $method = $_SERVER['REQUEST_METHOD'];
        switch($method){
            case 'GET':
                $sql = "SELECT category.name as catName,product.id,product.name,product.primary_image,product.price,product.description,product.short_description
                FROM product, category
                WHERE product.category_id = category.id ";
                $path = explode('/', $_SERVER['REQUEST_URI']);
                    //print_r($path[5]);
                if(isset($path[5]) && is_numeric($path[5])) {
                    $sql .= " AND product.id = :id";
                    //print_r($sql);
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->bindParam(':id', $path[5]);
                    $stmt->execute();
                    $products = $stmt->fetch(PDO::FETCH_ASSOC);
                    //print_r($products);
                }
               echo json_encode($products);
            break;
        }

    }
}
$category = new Products();
$category->render();