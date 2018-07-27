function setText(num){
    document.calculator.showbox.value+=num;
}
function opEqual(){
    document.calculator.showbox.value=eval(document.calculator.showbox.value);
}
function opClear(){
    document.calculator.showbox.value="";
}