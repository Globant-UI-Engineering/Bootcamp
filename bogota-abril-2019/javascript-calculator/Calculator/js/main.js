sum = () => {
    var number1 = document.getElementById("first_number").value;
    var number2 = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = parseFloat(number1) + parseFloat(number2);
} 

substract = () => {
    var number1 = document.getElementById("first_number").value;
    var number2 = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = parseFloat(number1) - parseFloat(number2);
} 

multiply = () => {
    var number1 = document.getElementById("first_number").value;
    var number2 = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = parseFloat(number1) * parseFloat(number2);
} 

divide = () => {
    var number1 = document.getElementById("first_number").value;
    var number2 = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = parseFloat(number1) / parseFloat(number2);
} 

percentage = () => {
    var number1 = document.getElementById("first_number").value;
    var number2 = document.getElementById("second_number").value;
    document.getElementById("result").innerHTML = (parseFloat(number1)*parseFloat(number2))/100;
} 

document.getElementById('sum').addEventListener('click', sum);
document.getElementById('substract').addEventListener('click', substract);
document.getElementById('multiply').addEventListener('click', multiply);
document.getElementById('divide').addEventListener('click', divide);
document.getElementById('percentage').addEventListener('click', percentage);

