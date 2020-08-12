<?php 
require_once "router/Router.php";

//En este clase obtengo la ruta por la cual se hará la petición
class App{
	public function __construct(){
		$router = new Router();
		$url = !empty($_GET['url']) ? $_GET['url'] : "default";
		$router->getRoute($url);
	}
}
?>