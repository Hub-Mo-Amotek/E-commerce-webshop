
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
    // allowing acces from the front end with these, we should specify this later for security purposes.
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: *");

    // .env stuff
    require_once realpath(__DIR__ . "/vendor/autoload.php");
        use Dotenv\Dotenv;
        $dotenv = Dotenv::createImmutable(__DIR__);
        $dotenv->load();

    


class DataConnection {

    private $server;
    private $user;
    private $pass;
    private $dbname;

    public function __construct()
    {
        $this->server = $_ENV['MySQL_DB_HOST'];
        $this->user = $_ENV['MySQL_DB_USER_NAME'];
        $this->pass = $_ENV['MySQL_DB_PASSWORD'];
        $this->dbname = $_ENV['MySQL_DB_NAME'];
    }

    public function connect(){
                


                try {
                    $conn = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->pass);
                    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                    //echo "Database connected: ";
                    return $conn;
                } catch (\Exception $e) {
                    echo "Database Error: " . $e->getMessage();
                    var_dump('connection to database failed');
                }

            }


        
}




























    // requiring the models and controllers
    // include 'Model/DataConnection.php';
    // require 'Model/RegisterUser.php';
    // require 'Model/CategoryFill.php';
    // require 'Controller/HomeController.php';



    //print_r($_SERVER);

    // here we are calling the render function inside the home controller
    // $HomeController = new HomeController($_ENV['MySQL_DB_HOST'], $_ENV['MySQL_DB_USER_NAME'], $_ENV['MySQL_DB_PASSWORD'], $_ENV['MySQL_DB_NAME']);
    // $HomeController->render();

/*    $register = new RegisterUser($_ENV['MySQL_DB_HOST'], $_ENV['MySQL_DB_USER_NAME'], $_ENV['MySQL_DB_PASSWORD'], $_ENV['MySQL_DB_NAME']);
    $register->render();*/

/*    $database = new DataConnection($_ENV['MySQL_DB_HOST'], $_ENV['MySQL_DB_USER_NAME'], $_ENV['MySQL_DB_PASSWORD'], $_ENV['MySQL_DB_NAME']);
    $database->connect();*/

    // $category = new categoryFill($_ENV['MySQL_DB_HOST'], $_ENV['MySQL_DB_USER_NAME'], $_ENV['MySQL_DB_PASSWORD'], $_ENV['MySQL_DB_NAME']);
    // $category->render();



