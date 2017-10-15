<?php require 'vendor/autoload.php';

// instantiate the App object
$app = new \Slim\App();

// enable cors
$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
});

$app->add(function ($req, $res, $next) {
    $response = $next($req, $res);
    return $response
            ->withHeader('Access-Control-Allow-Origin', '*')
            ->withHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept, Origin, Authorization')
            ->withHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
});

// return list of products
$app->get('/products', function ($request, $response, $args) {
  $product1 = array('name' => 'Laptop', 'price' => 499);
  $product2 = array('name' => 'Macbook', 'price' => 400);
  $product3 = array('name' => 'Iphone', 'price' => 100);
  $data = array($product1, $product2, $product3);
  $response->withJson($data, 201);
  return $response->withJson($data, 201);
});

// Run application
$app->run();