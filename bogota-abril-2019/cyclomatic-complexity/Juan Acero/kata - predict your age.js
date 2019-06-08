function predictAge (a1, a2, a3, a4, a5, a6, a7, a8) {
    var ages = [a1, a2, a3, a4, a5, a6, a7, a8];
    ages = ages.map(nage => nage * nage)
    return (Math.floor(Math.sqrt(ages.reduce((a, b) => a += b)) / 2));
}
predictAge(65, 60, 75, 55, 60, 63, 64, 45);