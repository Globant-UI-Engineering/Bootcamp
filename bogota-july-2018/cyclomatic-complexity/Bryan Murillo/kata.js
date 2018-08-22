function predictAge() {
    let suma = 0;
    for(i = 0; i < arguments.length; i++) {
        arguments[i] = Math.pow(arguments[i], 2);
        suma = suma + arguments[i];
    }
    return Math.floor(Math.sqrt(suma)/2);
}
