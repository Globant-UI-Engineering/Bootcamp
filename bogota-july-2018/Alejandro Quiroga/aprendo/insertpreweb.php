<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include ("connect.php");
$postdata=file_get_contents("php://input");
$request=json_decode($postdata);
$pregunta=$request->pregunta;
$profesor=$request->profesor;
$area=$request->area;
$tema=$request->tema;
$grado=$request->grado;
$respuestas=$request->respuestas;
$radios=$request->radios;

function generate_random_key() {
$chars = "abcdefghijklmnopqrstuvwxyz0123456789";
 
    $new_key = "";
    for ($i = 0; $i < 32; $i++) {
        $new_key .= $chars[rand(0,35)];
    }
    return $new_key;
}
$random_key = generate_random_key();
foreach($respuestas as $valor)
{
$r1=$valor;
$obj=json_decode($r1);
$res=$obj->{"respuesta"};
if(strtoupper(trim($radios))==strtoupper(trim($res)))
{
$est="1";
}
else
{
$est=$obj->{"estado"};
}
$txt="INSERT INTO respuestas (des_respuesta,estado,codigo_pregunta) values 
('".$res."','".$est."','".$random_key."')";
$sentencia=$con->prepare($txt);
$sentencia->execute();
$sentencia->close();
}

if(trim(strlen($tema)>0)&& trim(strlen($profesor)>0))
{
 $txt="INSERT INTO preguntas (codigo_pregunta,des_pregunta,profesor_pregunta,area_pregunta,tema_pregunta,grado_pregunta) values 
('".$random_key."','".$pregunta."','".$profesor."','".$area."','".$tema."','".$grado."')";
$sentencia=$con->prepare($txt);
$sentencia->execute();
$sentencia->close();
$data=array();
$data["pregunta"]="exito";
$data["radios"]="$radios";
$data["res"]=$respuestas;
$json=json_encode($data);
echo $json;
}
else
{
$data=array();
$data["pregunta"]="error";
$json=json_encode($data);
echo $json;
}
