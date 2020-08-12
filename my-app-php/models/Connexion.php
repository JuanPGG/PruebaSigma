<?php
class Connexion
{
    //Funcion que recibe los parametros de la cosulta sql
    public function query($sql, $params = [], $data = [])
    {

        $response = [];
        try {
            $statement = $this->connection()->prepare($sql);

            for ($i = 0; $i < count($params); $i++) {
                //Se llama la funcion bindParam para darle el tipo de dato a la variable $params
                $statement->bindParam($i + 1, $params[$i], $this->data($data[$i]));
            }
            $statement->execute();
            $status = $statement->errorInfo();

            if ($status[0] != 0) {
                $response['Error'] = $status[2];
                return $response;
            }
            $response['OK'] = $statement->fetchAll();

            return $response;
        } catch (Exception $e) {
            $response['Error'] = $e->getMessage();
            return $response;
        }
    }
    //Funcion que hace la conexion con la base de datos
    public function connection()
    {
        try {
            return new PDO("mysql:host=178.128.146.252;dbname=admin_sigmatest", "admin_sigmauser", "pfaDKIJyPF");
        } catch (Exception $e) {
            return null;
        }
    }

    //Funcion para el tipo de dato que se envia en la consulta
    public function data($data)
    {
        try {
            switch ($data) {
                case 'i':
                    return PDO::PARAM_INT;
                case 's':
                    return PDO::PARAM_STR;
                case 'b':
                    return PDO::PARAM_BOOL;
                default:
                    return null;
            }
        } catch (Exception $e) {
            return null;
        }
    }
}
?>