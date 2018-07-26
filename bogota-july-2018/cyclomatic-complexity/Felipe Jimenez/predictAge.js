function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
	//Considering there always will be only 8 ages, this approach will always be the one with the least cyclomatic complexity
	let multipliedAges=[age1*age1,age2*age2,age3*age3,age4*age4,age5*age5,age6*age6,age7*age7,age8*age8];
	let agesSum=multipliedAges[0]+multipliedAges[1]+multipliedAges[2]+multipliedAges[3]+multipliedAges[4]+multipliedAges[5]+multipliedAges[6]+multipliedAges[7];
	let ageSquareRoot=Math.sqrt(agesSum);
	let prediction=ageSquareRoot/2;
  	return Math.floor(prediction);
}