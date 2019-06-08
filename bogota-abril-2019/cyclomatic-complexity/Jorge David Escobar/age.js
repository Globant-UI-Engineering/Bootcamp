var ageArray = [];
for (let index = 0; index <= 8; index++) {
    var age = parseInt(prompt("enter your grandpa age of dead"));
    ageArray.push(age);
}

var ageToDie = function (a, b, c, d, e, f, g, h) {
    a = a * a;
    b = b * b;
    c = c * c;
    d = d * d;
    e = e * e;
    f = f * f;
    g = g * g;
    h = h * h;
    totalAges = a + b + c + d + e + f + g + h;
    sqrtTotalAges = Math.sqrt(totalAges);
    finalAge = sqrtTotalAges / 2;
    console.log(parseInt(finalAge));
    document.write("<p>hmm, it looks you will die at the age of: </p>");
    document.write(parseInt(finalAge));
}
ageToDie(
    ageArray[0], 
    ageArray[1], 
    ageArray[2], 
    ageArray[3], 
    ageArray[4], 
    ageArray[5], 
    ageArray[6], 
    ageArray[7], 
    ageArray[8]);