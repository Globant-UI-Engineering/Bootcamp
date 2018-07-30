var math_expression="";
var total="";

 function calculateOperation(){
   total =  eval(math_expression);
   var screen_value = document.getElementById("screen")
   screen_value.value=total;
   total="";
   math_expression="";
 }

 function insertValue(number){
   var screen_value = document.getElementById("screen")
   screen_value.value+=number;
        if(number=="x"){
            math_expression=math_expression+"*";
        }  
        else{
            math_expression=math_expression+number;
        }
 }

function clearValues(){
   var screen_value = document.getElementById("screen")
   screen_value.value="";
   math_expression="";
 }
