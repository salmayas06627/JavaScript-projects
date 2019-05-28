let mycan=document.querySelector("#mycan");
let ctx = mycan.getContext("2d");
mycan.width= window.innerWidth;
mycan.height= window.innerHeight;

mycan.addEventListener('mousedown',function(event){
    ctx.clearRect(0, 0, mycan.width, mycan.height);
    ctx.beginPath();
    ctx.fillStyle ='yellow';
    ctx.fill();
    ctx.fillRect(event.x,event.y,40,30);
    ctx.closePath();
    
})




