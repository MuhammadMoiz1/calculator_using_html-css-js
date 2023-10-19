var event1=document.querySelectorAll(".rings");
event1.forEach(ev=>{
ev.addEventListener("click",
function(detail){
    var a=detail.target.innerHTML;
    if(a==='='){  
          calculate(document.getElementById("disp").innerHTML);
    }
    else if(a=="clear"){
        document.getElementById("disp").innerHTML="";
    }
    else{
        document.getElementById("disp").innerHTML+=a;
    }
    
});});
function calculate(str){
    var x=["0","0"],op="";
    let j=0;
    for(let i=0;i<str.length;i++){
        if(str[i]=="+"||str[i]=="x"||str[i]=="/"||str[i]=="-"||str[i]=="^"||str[i]=="%"){
            op=str[i];
            
            j++;
        }
        else{
            x[j]+=str[i];
        }
    }
    var num1=Number(x[0]);
    var num2=Number(x[1]);
    if(op=="+"){
        document.getElementById("disp").innerHTML=`${num1+num2}`;
    }
    else if(op=="-"){
        document.getElementById("disp").innerHTML=`${num1-num2}`;
    }
    else if(op=="x"){
        document.getElementById("disp").innerHTML=`${num1*num2}`;
    }
    else if(op=="/"){
        document.getElementById("disp").innerHTML=`${num1/num2}`;
    }
    else if(op=="%"){
        document.getElementById("disp").innerHTML=`${num1%num2}`;
    }
    else{
        document.getElementById("disp").innerHTML=`${Math.pow(num1,num2)}`;
    }
}