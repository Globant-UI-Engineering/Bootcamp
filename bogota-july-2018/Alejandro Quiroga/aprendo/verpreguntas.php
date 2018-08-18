<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include ("connect.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$tema=$request->tema;

include 'connect.php';
$sql="select preguntas.grado_pregunta,preguntas.codigo_pregunta,preguntas.des_pregunta,respuestas.des_respuesta,respuestas.estado,respuestas.id_respuesta from preguntas,respuestas where preguntas.codigo_pregunta=respuestas.codigo_pregunta and preguntas.area_pregunta='1' and preguntas.grado_pregunta='2' ORDER BY preguntas.codigo_pregunta, RAND() LIMIT 25 ";
$consulta=$con->query($sql);
$data=array();

while($item=$consulta->fetch_array())
{
$data[]=$item;
}
$json=json_encode($data);

echo $json;