

//la complejidad del algoritmo es 2, se puede encontrar adjunta en el archivo cyclomatic complexity.jpg
function predictAge(age1, age2, age3, age4, age5, age6, age7, age8) {
    var ages = [...arguments];
    var prediction = 0;

    for (let i = 0; i < ages.length; i++) {
        prediction += ages[i] * ages[i];
    }

    prediction = Math.floor(Math.sqrt(prediction) / 2);
    return prediction;
}