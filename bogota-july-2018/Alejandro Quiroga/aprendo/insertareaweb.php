<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include ("connect.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$area=$request->area;
$profesor=$request->profesor;

if(trim(strlen($area)>0)&& trim(strlen($profesor)>0))
{
 $txt="INSERT INTO areas (des_area,profesor_area) values 
('".$area."','".$profesor."')";
$sentencia=$con->prepare($txt);
$sentencia->execute();
$sentencia->close();
$data=array();
$data["area"]="exito";
$json=json_encode($data);
echo $json;
}
else
{
$data=array();
$data["area"]="error";
$json=json_encode($data);
echo $json;
}
