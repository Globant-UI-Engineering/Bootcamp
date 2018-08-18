<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include ("connect.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$tema=$request->tema;
$profesor=$request->profesor;
$area=$request->area;

if(trim(strlen($tema)>0)&& trim(strlen($profesor)>0))
{
 $txt="INSERT INTO temas (des_tema,profesor_tema,area_tema) values 
('".$tema."','".$profesor."','".$area."')";
$sentencia=$con->prepare($txt);
$sentencia->execute();
$sentencia->close();
$data=array();
$data["tema"]=$tema;
$json=json_encode($data);
echo $json;
}
else
{
$data=array();
$data["tema"]="error";
$json=json_encode($data);
echo $json;
}
