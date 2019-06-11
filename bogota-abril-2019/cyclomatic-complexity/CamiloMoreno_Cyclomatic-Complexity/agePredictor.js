//la complejidad del algoritmo es 2, se puede encontrar adjunta en el archivo cyclomatic complexity.jpg
function predictAge(...arguments) {
    var prediction = 0;

    for (let i = 0; i < arguments.length; i++) {
        prediction += arguments[i] * arguments[i];
    }

    prediction = Math.floor(Math.sqrt(prediction) / 2);
    return prediction;
}