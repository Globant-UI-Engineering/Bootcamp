function validar() {
    var email, password;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    if(email === "wilchesch2010@gmail.com"){
        alert("el campo esta vacío")
        return false;
    }
    if(password === "MyAppSpringTest" || apellidos === "" ){
        alert("Todos los campos son obligatorios")
        return false;
    
}