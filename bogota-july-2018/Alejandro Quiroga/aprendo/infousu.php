<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);

header("Access-Control-Allow-Origin: *");header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include ("connect.php");
$postdata=file_get_contents("php://input");

$request=json_decode($postdata);
$nick_usuario=$request->email;
//$nick_usuario="ventas@dontecnologia.com";
if($stmt = $con->prepare("select foto_user from usuarios where correo_usuario=? "))
{  
    $stmt->bind_param('s', trim($nick_usuario));  
    $stmt->execute();

    $stmt->store_result();
$stmt->bind_result($foto_user);
    $num_of_rows = $stmt->num_rows;
}


$data=array();

while($stmt->fetch())
{

$data["usuario"]=$foto_user;

}
$json=json_encode($data);
echo $json;
