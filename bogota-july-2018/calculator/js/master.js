var addDisplay=(input, value) => {
    if (input.value == null || input.value == "0")
        input.value = value;
    else{
        input.value += value
    }    
}
var result=(input,num) => {    
    var result = eval(num);    
    input.value = result;    
}

var reset=(input)=>{
    input.value=" "
}

var valNum =(input,num)=> {
    console.log(num)
    for (var i = 0; i < num.length; i++) {
        var val = num.substring(i, i + 1)
        if (val < "0" || val > "9") {
            if (val != "+" && val != "-" && val != " " && val != "*") {
                alert("Please enter only numbers")
                reset(input);
            }
        }
    }
    result(input,num)
}    
