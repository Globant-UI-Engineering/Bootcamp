function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  //Added copy of arguments for security and manipulation
  const ages = Array.apply(null, arguments);
  
  const multipliedAges = ages.map(age => age * age);

  //const totalSum = multipliedAges.reduce((sum,number) => sum + number, 0);
  const totalSum = multipliedAges[0] + multipliedAges[1] + multipliedAges[2] + multipliedAges[3] + multipliedAges[4] + multipliedAges[5] + multipliedAges[6] + multipliedAges[7];

  const sqrRoot = Math.sqrt(totalSum);
  const finalResult = Math.floor(sqrRoot/2);
  return finalResult;
}