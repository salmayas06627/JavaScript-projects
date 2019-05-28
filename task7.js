const conv  = document.getElementById("from");
const totxt   = document.getElementById("to");
const btn   = document.getElementById("btn");
const fromList = document.querySelector('#fromList');
const toList = document.querySelector('#toList');
const options = document.querySelectorAll('option');
var fromval = conv.value;

function converter(from, to) {
    return to / from;
}

btn.addEventListener("click",function(event){
   
    
},false);
fromTxt.addEventListener('keyup',bbb,false);
//
toList.addEventListener('change',bbb,false)
fromList.addEventListener('change',bbb,false)
function bbb(e)
{
    let fromValue = fromTxt.value;
    let fromSelectedValue = fromList.value;
    let toSelectedValue = toList.value;
    let factor = converter(fromSelectedValue, toSelectedValue);
    toTxt.value = factor * fromValue;
}
for(let i=0;i<options.length;i++)
{
    options[i].addEventListener('click',function (e) {
        console.log("executed");
        console.log(toList.value);
      },false)
}



