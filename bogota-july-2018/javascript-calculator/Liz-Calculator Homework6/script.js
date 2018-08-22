(function calculateOperations() {

    const myElements = document.querySelectorAll(".button");
    Array.from(myElements).forEach(el => {
        el.addEventListener('click', event => {
            captures = event.target.value;
            document.getElementById('screen').value += captures;
            // console.log(event.target.value);
        });
    });

    const equal = document.getElementById('result');
    equal.addEventListener('click', event => {
        let operation = document.getElementById('screen').value;
        if (/^[-+(]?[(\d)()]+([-+*(\/.)]+[-+]?[(\d))]+)*$/.test(operation)) {
            let result = eval(operation);
            document.getElementById('screen').value = result;
        } else { document.getElementById('screen').value = "Math expr required"; }
    });

})();