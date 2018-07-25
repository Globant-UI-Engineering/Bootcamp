function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
  	var multipliedAges=[age1*age1,age2*age2,age3*age3,age4*age4,age5*age5,age6*age6,age7*age7,age8*age8];
	var agesSum=multipliedAges[0]+multipliedAges[1]+multipliedAges[2]+multipliedAges[3]+multipliedAges[4]+multipliedAges[5]+multipliedAges[6]+multipliedAges[7];
	var ageSquare=Math.sqrt(agesSum);
	var prediction=ageSquare/2;
	return floor(prediction);	
}