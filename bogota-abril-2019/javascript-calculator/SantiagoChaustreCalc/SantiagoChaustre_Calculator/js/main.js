let state = false;
const display = document.getElementById('input_screen');

function isNumber(char){
    let regeular_expression =  new RegExp("\\d");
    return regeular_expression.exec(char);
}

function validateInput(last_char, new_Char){
    if(!isNumber(last_char) && !isNumber(new_Char)){
        return false;
    }
    return true;
}

function eval_expression(expression){
    try{
        return eval(expression);
    }catch (e){
        return "Error.";
    }
}

function equals_key(){
    if(state){
        result = eval_expression(display.value);
        display.value = result;
    }
}

function PowerCalc(){
    if(state){
        display.value = "";
        display.placeholder = "I'm off...";
    }else{
        display.placeholder = "";
        display.value = "0";
    }
    state = !state;
}

function clear_screen(){
    state ? display.value = "0" : display.value="";
}

function delete_last_char(){
    if(state ){
        display.value = display.value.slice(0, display.value.length -1);
        display.value += display.value.length > 0 ? "" : "0";
    }
}

function AddSymbol(char){display.value.length
    if (state){
        if(validateInput(display.value.substr(display.value.length -1), char)){
            display.value = display.value == "0" || display.value == "Error." ? (isNumber(char) ? char : "0"): display.value + char ;
        }
    }
}