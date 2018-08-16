(function (){

  function predictAge(...ages){
     let predict = ages.map( a => Math.pow(a,2));
     return Math.floor(Math.sqrt(predict.reduce((a,b) => a+b))/2);


    /* La complejidad ciclomática es de 1 */
  }
}());
