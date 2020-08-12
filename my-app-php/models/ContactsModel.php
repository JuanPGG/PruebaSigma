<?php 
require_once "models/Connexion.php";
class ContactsModel{
	private Connexion $Connexion;

	public function __construct(){
		$this->Connexion = new Connexion();
	}
	//Funcion en la que se envía la consulta, los parametros y el tipo de dato a el modelo Conexion
	public function Insert($data){
		$response = [];
		try {
			$response = $this->Connexion->query("INSERT INTO contacts(name, email, state, city) values(?,?,?,?)",$data,['s','s','s','s']);	
			return $response;		
		} catch (Exception $e) {
			$response["Error"] = $e->getMessage();
			return $response;
		}
	}
}
?>