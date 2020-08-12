<?php 
require_once "models/ContactsModel.php";
class ContactsController{
	private ContactsModel $ContactsModel;

	public function __construct(){
		$this->ContactsModel = new ContactsModel();
	}
	//Se declara la funcion la cual enviara los datos recibidos del formulario a el modelo contacts
	public function Insert(){
		$response = [];
		try {
			if((!isset($_POST["state"]) && !isset($_POST["city"]) && !isset($_POST["name"]) && !isset($_POST["email"])) ||
				(empty($_POST["state"]) && empty($_POST["city"]) && empty($_POST["name"]) && empty($_POST["email"]))){
				$response["Error"] = "Error in data";
				return $response;
			}
			$data = array($_POST["name"], $_POST["email"], $_POST["state"], $_POST["city"]);
			$response = $this->ContactsModel->Insert($data);
			return $response;
		} catch (Exception $e) {
			$response["Error"] = $e->getMessage();
			return $response;
		}
	}	
}
?>