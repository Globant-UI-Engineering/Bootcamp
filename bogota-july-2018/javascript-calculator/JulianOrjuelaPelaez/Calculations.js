(function(){
    const InputLabel = (obj)=>{
        let getInput = obj;
        if(getInput == "="){
            input.innerHTML = eval(input.innerHTML);
        }else if (getInput == "AC")
        {
            input.innerHTML = "0";
        }else{
            if(input.innerHTML == "0"){
                input.innerHTML = getInput;
            }else{
                input.innerHTML += getInput;
            }
        }
    }
                //---Get elements from the DOM---//
    const input = document.getElementById("input");
    const AC = document.getElementById("AC");
    const div = document.getElementById("/");
    const nine = document.getElementById("9");
    const eight = document.getElementById("8");
    const seven = document.getElementById("7");
    const times = document.getElementById("*");
    const six = document.getElementById("6");
    const five = document.getElementById("5");
    const four = document.getElementById("4");
    const minus = document.getElementById("-");
    const three = document.getElementById("3");
    const two = document.getElementById("2");
    const one = document.getElementById("1");
    const plus = document.getElementById("+");
    const zero = document.getElementById("0");
    const dot = document.getElementById(".");
    const equal = document.getElementById("=");

                //---Set events for each button---//
    AC.addEventListener("click",()=>{InputLabel(AC.innerHTML)},false);
    div.addEventListener("click",()=>{InputLabel(div.innerHTML)},false);
    nine.addEventListener("click",()=>{InputLabel(nine.innerHTML)},false);
    eight.addEventListener("click",()=>{InputLabel(eight.innerHTML)},false);
    seven.addEventListener("click",()=>{InputLabel(seven.innerHTML)},false);
    times.addEventListener("click",()=>{InputLabel(times.innerHTML)},false);
    six.addEventListener("click",()=>{InputLabel(six.innerHTML)},false);
    five.addEventListener("click",()=>{InputLabel(five.innerHTML)},false);
    four.addEventListener("click",()=>{InputLabel(four.innerHTML)},false);
    minus.addEventListener("click",()=>{InputLabel(minus.innerHTML)},false);
    three.addEventListener("click",()=>{InputLabel(three.innerHTML)},false);
    two.addEventListener("click",()=>{InputLabel(two.innerHTML)},false);
    one.addEventListener("click",()=>{InputLabel(one.innerHTML)},false);
    plus.addEventListener("click",()=>{InputLabel(plus.innerHTML)},false);
    zero.addEventListener("click",()=>{InputLabel(zero.innerHTML)},false);
    dot.addEventListener("click",()=>{InputLabel(dot.innerHTML)},false);
    equal.addEventListener("click",()=>{InputLabel(equal.innerHTML)},false);
}())
    