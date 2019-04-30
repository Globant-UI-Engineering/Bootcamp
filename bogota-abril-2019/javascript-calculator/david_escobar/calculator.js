

    number1 = prompt("enter first number");
    number2 = prompt("enter second number");
    option = prompt("for + enter 1, for - enter 2, for * enter 3, for / enter 4");
    option = parseInt(option);
       
    if (option === 1) {
        console.log(parseFloat(number1)+parseFloat(number2));        
    }
    if (option === 2) {
        console.log(parseFloat(number1)-parseFloat(number2));        
    }
    if (option === 3) {
        console.log(parseFloat(number1)*parseFloat(number2));        
    }
    if (option === 4) {
        console.log(parseFloat(number1)/parseFloat(number2));        
    }
