(function(){
    const inputControl = (obj)=>{
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
    AC.addEventListener("click",()=>{inputControl(AC.innerHTML)});
    div.addEventListener("click",()=>{inputControl(div.innerHTML)});
    nine.addEventListener("click",()=>{inputControl(nine.innerHTML)});
    eight.addEventListener("click",()=>{inputControl(eight.innerHTML)});
    seven.addEventListener("click",()=>{inputControl(seven.innerHTML)});
    times.addEventListener("click",()=>{inputControl(times.innerHTML)});
    six.addEventListener("click",()=>{inputControl(six.innerHTML)});
    five.addEventListener("click",()=>{inputControl(five.innerHTML)});
    four.addEventListener("click",()=>{inputControl(four.innerHTML)});
    minus.addEventListener("click",()=>{inputControl(minus.innerHTML)});
    three.addEventListener("click",()=>{inputControl(three.innerHTML)});
    two.addEventListener("click",()=>{inputControl(two.innerHTML)});
    one.addEventListener("click",()=>{inputControl(one.innerHTML)});
    plus.addEventListener("click",()=>{inputControl(plus.innerHTML)});
    zero.addEventListener("click",()=>{inputControl(zero.innerHTML)});
    dot.addEventListener("click",()=>{inputControl(dot.innerHTML)});
    equal.addEventListener("click",()=>{inputControl(equal.innerHTML)});
}())
    