
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

    // requiring the models and controllers
    require 'Controller/HomeController.php';
    require 'Model/DataConnection.php';


    // here we are calling the render function inside the home controller
    $HomeController = new HomeController();
    $HomeController->render();


