<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);

header("Access-Control-Allow-Origin: *");header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include ("connect.php");
$postdata=file_get_contents("php://input");

$request=json_decode($postdata);
$nick_usuario=$request->email;
$password=$request->pass;

$clave=sha1($password);
if($stmt = $con->prepare("select correo_usuario,foto_user,nick_usuario,role,colegio from usuarios where correo_usuario=? and password=?"))
{  
    $stmt->bind_param('ss', trim($nick_usuario),trim($clave));  
    $stmt->execute();
    $stmt->store_result(); 
$stmt->bind_result($usuario,$foto_user,$nick,$role,$colegio);

    $num_of_rows = $stmt->num_rows;
}


$data=array();

while($stmt->fetch())
{

$data["usuario"]=$usuario;
$data["foto"]=$foto_user;
$data["nick"]=$nick;
$data["role"]=$role;
$data["colegio"]=$colegio;

}
$json=json_encode($data);
echo $json;
