(function(){
    const inputControl = (e)=>{
        let getInput = e.target.innerHTML;
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
     const input = document.getElementById("input");
     let eventDelegation = document.getElementById('tableContent');
     eventDelegation.addEventListener("click",inputControl);
}())
    