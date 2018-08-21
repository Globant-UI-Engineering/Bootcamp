<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

include ("connect.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$nick_alumno=$request->email;
$password=$request->pass;

$clave=sha1($password);
if($stmt = $con->prepare("select correo_alumno,foto_alumno,nick_alumno from alumnos where correo_alumno=? and password=?"))
{  
    $stmt->bind_param('ss', trim($nick_alumno),trim($clave));  
    $stmt->execute();
    $stmt->store_result(); 
	$stmt->bind_result($alumno,$foto_alumno,$nick);
    $num_of_rows = $stmt->num_rows;
}
$data=array();
while($stmt->fetch())
{
$data["alumno"]=$alumno;
$data["foto"]=$foto_alumno;
$data["nick"]=$nick;
}
$json=json_encode($data);
echo $json;
