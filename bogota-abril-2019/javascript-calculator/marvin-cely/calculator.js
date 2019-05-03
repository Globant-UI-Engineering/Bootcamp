//USAR ARGUMENTS
//Tambien se puede usar ...params para acceder params[]
// default parameters sumar(a, b, c = 0) {

let entrada = "((((";

let asn = 0;

Number.prototype.operate = function(entry) {
    return (entry.length > 0 && !entry.slice(-1).match(/[\+\-\*\/]/g)) ?
        eval(entry) : this.valueOf();
}

console.log(asn.operate(entrada));