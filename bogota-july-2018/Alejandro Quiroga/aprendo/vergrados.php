<?php
$json="";
header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");

error_reporting(E_ALL);

include 'connect.php';
$sql="select * from grados";
$consulta=$con->query($sql);
$data=array();

while($item=$consulta->fetch_array())
{
    //echo $item[1];
$data[]=$item;

}
$json=json_encode($data);

echo $json;