(function calculateOperations() {

    const myElements = document.querySelectorAll('#button');
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
        let result = eval(operation);
        document.getElementById('screen').value = result;
        //console.log(result);
    });

})();