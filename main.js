const one=document.querySelector("#n1");
const two=document.querySelector("#n2");
const three=document.querySelector("#n3");
const four=document.querySelector("#n4");
const five=document.querySelector("#n5");
const six=document.querySelector("#n6");
const seven=document.querySelector("#n7");
const eight=document.querySelector("#n8");
const nine=document.querySelector("#n9");
const zero=document.querySelector("#n0");
const ac=document.querySelector("#remove");
const c=document.querySelector("#nC");
const paranthesis=document.querySelector("#paranthesis");
const x=document.querySelector("#X");
const add=document.querySelector("#add");
const minus=document.querySelector("#minus");
const divide=document.querySelector("#divide");
const equals=document.querySelector("#equals");
const dot=document.querySelector("#dot");
const percentage =document.querySelector("#mod");

let result=document.querySelector("#result");
let calc=document.querySelector("#calc");
let calculation;
let paran=true;
let arth=false;
ac.addEventListener('click',(e)=>{
   result.innerText=0;
   calc.innerText="";
   calculation=0;
})
one.addEventListener('click',(e)=>{
    calc.innerText+="1";
    arth=true;
})
two.addEventListener('click',(e)=>{
    calc.innerText+="2";
    arth=true;
})
three.addEventListener('click',(e)=>{
    calc.innerText+="3";
    arth=true;
})
four.addEventListener('click',(e)=>{
    calc.innerText+="4";
    arth=true;
})
five.addEventListener('click',(e)=>{
    calc.innerText+="5";
    arth=true;
})
six.addEventListener('click',(e)=>{
    calc.innerText+="6";
    arth=true;
})
seven.addEventListener('click',(e)=>{
    calc.innerText+="7";
    arth=true;
})
eight.addEventListener('click',(e)=>{
    calc.innerText+="8";
    arth=true;
})
nine.addEventListener('click',(e)=>{
    calc.innerText+="9";
    arth=true;
})
zero.addEventListener('click',(e)=>{
    calc.innerText+="0";
    arth=true;
})

x.addEventListener('click',(e)=>{
    if(arth){
    calc.innerText+=" x ";
    arth=false;
    }
})
add.addEventListener('click',(e)=>{
    if(arth){
    calc.innerText+=" + ";
    arth=false;
    }
})
minus.addEventListener('click',(e)=>{
    if(arth){
    calc.innerText+=" - ";
    arth=false;
    }
})
divide.addEventListener('click',(e)=>{
    if(arth){
    calc.innerText+=" / ";
    arth=false;
    }
})

paranthesis.addEventListener('click',(e)=>{
    if(paran){
        calc.innerText+="(";
        paran=false;
    }else{
        calc.innerText+=")";
        paran=true;
    }
})





