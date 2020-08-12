<?php 
require_once "controllers/ContactsController.php";
class BasicController{

	public function Contacts(){
		try {
			$ContactsController = new ContactsController();
			$response = $ContactsController->Insert();
			if(isset($response["Error"])){
				$this->Error($response["Error"]);
				return;
			}
			$response = json_encode(["OK"=>$response['OK']]);
			echo $response;
		} catch (Exception $e) {
			$this->Error($e->getMessage());
		}
	}

	public function Error($message){
		try {
			$response = json_encode(["Error"=>$message]);
			echo $response;
		} catch (Exception $e) {
			$response = json_encode(["Error"=>$e->getMessage()]);
			echo $response;
		}
	}
}
?>