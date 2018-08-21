<?php
error_reporting(E_ERROR | E_WARNING | E_PARSE);
header("Access-Control-Allow-Origin: *");
 header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include ("connect.php");
$postdata=file_get_contents("php://input");
$encontrado=3;
$request=json_decode($postdata);
$nombre_profesor=$request->nombre;
$apellido_profesor=$request->apellido;
$colegio=$request->colegio;
$area=$request->area;
$correo_profesor=$request->email;
$nick_profesor=$request->nick;
$password=$request->pass;
if($stmt = $con->prepare("select nick_profesor from profesores where correo_profesor=? "))
{  
    $stmt->bind_param('s', trim($correo_profesor));  
    $stmt->execute();
    $stmt->store_result(); 
    $num_of_rows = $stmt->num_rows;
if($num_of_rows>0)
{
    $encontrado=1;
}
else
{
if($stmt1 = $con->prepare("select nick_profesor from profesores where nick_profesor=? "))
{
$stmt1->bind_param('s', trim($nick_profesor)); 
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
if(trim(strlen($correo_profesor)>0)&& trim(strlen($nick_profesor)>0)&&trim(strlen($password)>0))
{
 $txt="INSERT INTO profesores (nombre_profesor,apellido_profesor,correo_profesor,nick_profesor,password,codigo_seguridad,colegio,area_profesor) values 
('".$nombre_profesor."','".$apellido_profesor."','".$correo_profesor."','".$nick_profesor."','".$clave."','".$random_key."','".$colegio."','".$area."')";
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
$data["profesor"]=$encontrado;
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
$data["profesor"]=$encontrado;
$json=json_encode($data);
echo $json;
}