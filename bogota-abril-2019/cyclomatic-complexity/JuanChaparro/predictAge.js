function predictAge(...args) {
    var sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum = sum + args[i] * args[i];
    }
    return  Math.floor(Math.sqrt(sum) / 2);
}
