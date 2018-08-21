<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include 'connect.php';
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$area=$request->area;
$sql="select * from temas where area_tema='".$area."'";
$consulta=$con->query($sql);
$data=array();

while($item=$consulta->fetch_array())
{
    //echo $item[1];
$data[]=$item;

}
$json=json_encode($data);

echo $json;