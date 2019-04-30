document.getElementById("input").addEventListener('keyup', processInput)

function processInput({ target }) {
    const result = normVector(target.value.split(','))
    document.getElementById('ans').innerHTML = result
}

function normVector(vector) {
    let i = 0;
    let sum = 0;
    while (i < vector.length) {
        sum += Math.pow(vector[i++], 2)
    }

    return Math.sqrt(sum);
}