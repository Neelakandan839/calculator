let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");
let zero = document.getElementById("0");
let add = document.getElementById("+");
let sub = document.getElementById("-");
let mul = document.getElementById("*");
let div = document.getElementById("/");
let clear = document.getElementById("clear");
let keypad = document.querySelector(".keypad");
let equal = document.getElementById("=");

keypad.addEventListener("click", display);
clear.addEventListener("click",clearHistory);
equal.addEventListener("click",result);


let input = document.querySelector(".keypad");
let Result = document.querySelector("#input");
result.finalResult = "";

document.body.addEventListener("keypress",keypress);

function display(e){
    let history= document.querySelector(".history");
    if(e.target.value===undefined){
        history.innerHTML = history.innerHTML+"";
    }else{
        history.innerHTML = history.innerHTML+e.target.value;
    }
    
}

function clearHistory(){
    let history= document.querySelector(".history");
    let Result = document.querySelector("#input");
    history.innerHTML="";
    Result.value = "0";
}


function result(){
    let history= document.querySelector(".history"); 
    let Result = document.querySelector("#input");
    Result.value = eval(history.innerText); 
}

function calculation(num1,operator,num2){
    if(operator === "+"){
        return num1+num2;
    }else if(operator === "-"){
        return num1-num2;    
    }else if(operator === "*"){
        return num1*num2;
    }else if(operator === "/"){
        return num1/num2;
    }
}

function keypress(e){
    let history= document.querySelector(".history");
    if((e.key<10 && e.key>=0) || e.key==="*" || e.key==="-" || e.key==="+" || e.key==="/" ){
        history.innerText += e.key;
    }else if(e.key==="Enter"){
        result();
    }
}
