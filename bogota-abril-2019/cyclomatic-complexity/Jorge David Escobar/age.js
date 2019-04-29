
var ageToDie  = function(a, b, c, d, e, f, g, h){
    a = a*a;
    b = b*b;
    c = c*c;
    d = d*d;
    e = e*e;
    f = f*f;
    g = g*g;
    h = h*h;
    totalAges = a+b+c+d+e+f+g+h;
    sqrtTotalAges = Math.sqrt(totalAges);
    finalAge = sqrtTotalAges/2;
    console.log(parseInt(finalAge));
    document.write("hmm, it looks you will die at the age of: ");
    document.write(parseInt(finalAge));
}
var age = ageToDie(2, 5, 9, 7, 8, 9, 8, 63);