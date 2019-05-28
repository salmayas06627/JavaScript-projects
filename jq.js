$(function(){
    $("body").on("click",function(){
        let speed1=Math.random()*10000;
        let speed2=Math.random()*10000;
    $("#img1").animate({top:"500px"},speed1);
    $("#img2").animate({top:"500px"},speed2);
    if(speed1 >speed2){
        console.log("the winner is car 1");
    }
    else{
        console.log("the winner is car 2");
    }
    })
 
});