<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    //header("Access-Control-Allow-Methods: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header('Content-Type: application/json; charset=utf-8');
require '../db.php';
class Products extends DataConnection {
    public function render() {
        $method = $_SERVER['REQUEST_METHOD'];
        switch($method){
            case 'POST':
                $productData = json_decode(file_get_contents('php://input'));
                $sql = "INSERT INTO `product` (`name`, `description`,`short_description`,`price`,`primary_image`,`sub_image_1`,`sub_image_2`,`created_at`,`quantity`,`category_id`,`user_id`,`discount_id`)
                VALUES (:name,:description,:short_description,:price,:primary_image,:sub_image_1,:sub_image_2,:created_at,:quantity,:category_id,:user_id,:discount_id)";
              
                $stmt = $this->connect()->prepare($sql);

                $date = date('Y-m-d');
                
                $stmt->bindParam(':name', $productData->name);
                $stmt->bindParam(':description', $productData->description);
                $stmt->bindParam(':short_description', $productData->short_description);
                $stmt->bindParam(':price', $productData->price);
                $stmt->bindParam(':primary_image', $productData->primary_image);
                $stmt->bindParam(':sub_image_1', $productData->sub_image_1);
                $stmt->bindParam(':sub_image_2', $productData->sub_image_2);
                $stmt->bindParam(':created_at', $date);
                $stmt->bindParam(':quantity', $productData->quantity);
                $stmt->bindParam(':category_id', $productData->category_id);
                $stmt->bindParam(':user_id', $productData->user_id);
                $stmt->bindParam(':discount_id', $productData->discount_id);                  
                if($stmt->execute()) {
                    $data = ['status' => 1, 'message' => "Record successfully created"];
                } else {
                    $data = ['status' => 0, 'message' => "Failed to create record."];
                }
                echo json_encode($data);
                break;
            case 'GET':
                $pathData = explode('?', $_SERVER['REQUEST_URI']);
                if($pathData[1] == 'newProducts'){
                    /**query to display new products on home page */
                    print_r($pathData);
                    $sql = "select name,primary_image,price from product
                    where quantity > 0
                    order by created_at DESC
                    limit 4;";
                    print_r($sql);
                    $stmt = $this->connect()->prepare($sql);
                    $stmt->execute();
                    $allProductsData = $stmt->fetchAll(PDO::FETCH_ASSOC);
                    print_r($allProductsData);
                } else{
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
                }
                echo json_encode($allProductsData);
                break;
        }

    }
}
$category = new Products();
$category->render();