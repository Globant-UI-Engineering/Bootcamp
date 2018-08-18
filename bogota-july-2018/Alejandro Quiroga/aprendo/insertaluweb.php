<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include ("connect.php");
$postdata=file_get_contents("php://input");
$encontrado=3;
$request=json_decode($postdata);
$nombre_alumno=$request->nombre;
$apellido_alumno=$request->apellido;
$colegio=$request->colegio;
$grado=$request->grado;
$correo_alumno=$request->email;
$nick_alumno=$request->nick;
$password=$request->pass;
if($stmt = $con->prepare("select nick_alumno from alumnos where correo_alumno=? "))
{  
    $stmt->bind_param('s', trim($correo_alumno));  
    $stmt->execute();
    $stmt->store_result(); 
    $num_of_rows = $stmt->num_rows;
if($num_of_rows>0)
{
    $encontrado=1;
}
else
{
if($stmt1 = $con->prepare("select nick_alumno from alumnos where nick_alumno=? "))
{
$stmt1->bind_param('s', trim($nick_alumno)); 
 $stmt1->execute();
 $stmt1->store_result();
$num_of_rows1 = $stmt1->num_rows;
if($num_of_rows1>0)
{
$encontrado=2;
}
else
{
$encontrado=0;
}
}
}//else comprobar correo

}//if comprobaar correo

if($encontrado==0)
{
function generate_random_key() {
$chars = "abcdefghijklmnopqrstuvwxyz0123456789";
 
    $new_key = "";
    for ($i = 0; $i < 32; $i++) {
        $new_key .= $chars[rand(0,35)];
    }
    return $new_key;
}
$random_key = generate_random_key();
$clave=sha1($password);
if(trim(strlen($correo_alumno)>0)&& trim(strlen($nick_alumno)>0)&&trim(strlen($password)>0))
{
 $txt="INSERT INTO alumnos (nombre_alumno,apellido_alumno,correo_alumno,nick_alumno,password,codigo_seguridad,colegio,grado_alumno) values 
('".$nombre_alumno."','".$apellido_alumno."','".$correo_alumno."','".$nick_alumno."','".$clave."','".$random_key."','".$colegio."','".$grado."')";
$sentencia=$con->prepare($txt);
$sentencia->execute();
$sentencia->close();

//$to = $correo_usuario;
//$subject = "Asunto del email";
//$headers = "MIME-Version: 1.0" . "\r\n";
//$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n"; 
//$message = "
//<html>
//<head>
//<title>HTML</title>
//</head>
//<body>
//<h1>Haz click en el siguiente enlace para confirmar tu email</h1>
//<a href='http://localhost:4200/confirmar/".$correo_usuario."/".$random_key."'>Esto es un párrafo en HTML</a>
//</body>
//</html>"; 
//mail($to, $subject, $message, $headers);


$data=array();
$data["alumno"]=$encontrado;
$json=json_encode($data);
echo $json;
}
else
{

}
}
else
{
$data=array();
$data["alumno"]=$encontrado;
$json=json_encode($data);
echo $json;
}
