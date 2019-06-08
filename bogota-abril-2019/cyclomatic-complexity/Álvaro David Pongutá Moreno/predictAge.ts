// Kata A

//Cyclomatic Complexity M= 1
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){

  //M -> Una región
  
  //Se multiplica cada edad por ella misma y cada resultado se suma en un resultado final
  let multiplicationSumNumber= (age1*age1)+(age2*age2)+(age3*age3)+(age4*age4)+(age5*age5)+(age6*age6)+(age7*age7)+(age8*age8);
  //Se consigue la raíz cuadrada del resultado final de la suma de cada una de las multiplicaciones
  let sqrtNumber= Math.sqrt(multiplicationSumNumber);
  //Se divide en 2 el resultado de la raíz cuadrada
  let divisionNumber= sqrtNumber/2;
  //Finalmente se redondea el número hacia abajo y se retorna
  return Math.floor(divisionNumber);
}

//Cyclomatic Complexity M= 2
function predictAge2(){

  let multiplicationSumNumber= 0;

  //M -> Una región (Ciclo)
  for (let i= 0; i < arguments.length; i++){
    //Se multiplica cada edad por ella misma y cada resultado se suma en un resultado final
    multiplicationSumNumber += (arguments[i]*arguments[i]);
  }

  //M -> Segunda región

  //Se consigue la raíz cuadrada del resultado final de la suma de cada una de las multiplicaciones
  let sqrtNumber= Math.sqrt(multiplicationSumNumber);
  //Se divide en 2 el resultado de la raíz cuadrada
  let divisionNumber= sqrtNumber/2;
  //Finalmente se redondea el número hacia abajo y se retorna
  return Math.floor(divisionNumber);
}

// Kata B

//M 5 -5 + 2 = 2 / M = 2 (Regiones)
//S
function unluckyDays(year){
  //M -> Primera región
  //Contador de viernes 13 en un año
  var numberOfUnluckyDays = 0;
  
  //Se itera sobre todos los meses del año
  //M -> 1 / M -> Segunda región (Ciclo)
  for (var month= 0; month<12; month++) {
      //Se crea una fecha para el año, mes de la iteración y día 13
      var date = new Date(year,month,13);
      //Se realiza un condicional para verificar si estos días son un día Viernes, si es así el contador de días aumenta
      //M -> 2
      if(date.getDay() == 5){
      //M -> 3
        numberOfUnluckyDays++;
     }
  }
  return numberOfUnluckyDays;   
}
//E