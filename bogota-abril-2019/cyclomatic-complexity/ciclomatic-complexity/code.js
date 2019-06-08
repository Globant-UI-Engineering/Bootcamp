function predictAge(ages){
    var calculation = 0;
    
    for (var i = 0; i < ages.length; i++) {
        calculation +=  ages[i]**2;
    }

    calculation = Math.floor((calculation**(1/2)) / 2);
    

    return console.log(calculation);
}
