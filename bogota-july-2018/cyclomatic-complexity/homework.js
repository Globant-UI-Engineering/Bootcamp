predictAge = (...ages) => {
    let age = 0;
    ages.forEach(element => {
        age += Math.pow(element, 2);
    });
    return Math.floor((Math.sqrt(age)) / 2);
}
