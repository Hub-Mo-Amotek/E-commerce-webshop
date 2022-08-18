
<?php

    // allowing acces from the front end with these, we should specify this later for security purposes.
    header('Access-Control-Allow-Origin: *');
    header("Access-Control-Allow-Headers: *");

    // .env stuff
    require_once realpath(__DIR__ . "/vendor/autoload.php");
        use Dotenv\Dotenv;
        $dotenv = Dotenv::createImmutable(__DIR__);
        $dotenv->load();

    // requiring the models and controllers
    require 'Controller/HomeController.php';
    require 'Model/DataConnection.php';


    // here we are calling the render function insite the home controller
    $HomeController = new HomeController();
    $HomeController->render();


