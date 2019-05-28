const intxt1 = document.getElementById("txt1");
const intxt2 = document.getElementById("txt2");
const outtxt1 = document.getElementById("txt3");
const option = document.getElementById("menu");
const btn = document.getElementById('btn');
const you =document.getElementById('you');
function calc() {
    for (let i = 0; i < 4; i++) {
        var res = option.options[option.selectedIndex].value;
        let result = parseInt(intxt1.value) * res;
       if(intxt2.value==1){
        you.innerHTML = "you will pay";
        outtxt1.value = result ;
       }
       else{
       you.innerHTML = "Each one will pay";
        let result2 = result / parseInt(intxt2.value);
        outtxt1.value = result2;
       }
    }
}

btn.addEventListener("click", calc, false);
intxt1.addEventListener('keydown',function(event){
if(event.keyCode >=48 && event.keyCode<=57 || event.keyCode == 8){

}
else{
    alert("you must enter a number");
}
},false);
intxt2.addEventListener('keydown',function(event){
    if(event.keyCode >=48 && event.keyCode<=57 || event.keyCode == 8){
    
    }
    else{
        alert("you must enter a number");
    }
    },false);