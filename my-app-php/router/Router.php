<?php 
require_once "controllers/BasicController.php";

class Router{
	//Creacion del objeto para instanciar la clase BasicController
	private BasicController $BasicController;

	public function __construct(){
		$this->BasicController = new BasicController();
	}
	//Se declara la función que hara un case según la url que este en el parametro
	public function getRoute($url){
		try{
			switch($url){
				case "contacts":
					$this->BasicController->Contacts();
				break;

				case "default":
				break;

				default:
					$this->BasicController->Error("default");
				break;
			}	
		}catch(Exception $e){
			$this->BasicController->Error($e->getMessage());
		}
	}
}
?>