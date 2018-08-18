<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);

header("Access-Control-Allow-Origin: *");header("Content-Type: application/json; charset=UTF-8");

header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include ("connect.php");
$postdata=file_get_contents("php://input");

$request=json_decode($postdata);
$nick_profesor=$request->email;
$password=$request->pass;

$clave=sha1($password);
if($stmt = $con->prepare("select correo_profesor,foto_profesor,nick_profesor,area_profesor from profesores where correo_profesor=? and password=?"))
{  
    $stmt->bind_param('ss', trim($nick_profesor),trim($clave));  
    $stmt->execute();
    $stmt->store_result(); 
$stmt->bind_result($profesor,$foto_profesor,$nick,$area);

    $num_of_rows = $stmt->num_rows;
}


$data=array();

while($stmt->fetch())
{

$data["profesor"]=$profesor;
$data["foto"]=$foto_profesor;
$data["nick"]=$nick;
$data["area"]=$area;


}
$json=json_encode($data);
echo $json;
