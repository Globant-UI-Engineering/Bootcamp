//Cyclomatic Complexity M= 1
function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  
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
function predictAgeFor(age1,age2,age3,age4,age5,age6,age7,age8){

  let multiplicationSumNumber= 0;

  for (let i= 0; i < arguments.length; i++){
    //Se multiplica cada edad por ella misma y cada resultado se suma en un resultado final
    multiplicationSumNumber += (arguments[i]*arguments[i]);
  }

  //Se consigue la raíz cuadrada del resultado final de la suma de cada una de las multiplicaciones
  let sqrtNumber= Math.sqrt(multiplicationSumNumber);
  //Se divide en 2 el resultado de la raíz cuadrada
  let divisionNumber= sqrtNumber/2;
  //Finalmente se redondea el número hacia abajo y se retorna
  return Math.floor(divisionNumber);
}