<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include ("connect.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$usuario=$request->usuario;
$puntaje=$request->puntaje;
//$usuario=$_GET["usuario"];
//$puntaje=$_GET["puntaje"];
$txt="UPDATE alumnos SET puntaje=puntaje + ".$puntaje." where correo_alumno='".$usuario."'"; 
$sentencia=$con->prepare($txt);
$sentencia->execute();
$sentencia->close();
$data=array();
$data["alumno"]=$puntaje;
$json=json_encode($data);
echo $json;



