var charc = document.getElementById("charc");
var block = document.getElementById("block");
function jump(){
    if(!charc.classList.contains("animate")){
    charc.classList.add("animate")
}
    setTimeout(function(){
        charc.classList.remove("animate")
    },500)
}
var  checkDead = setInterval(function(){
    var characterTop=parseInt(window.getComputedStyle(charc).getPropertyValue("top"))
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"))
    console.log(blockLeft+" "+characterTop)
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        alert("game over")
        block.style.animation="none";
        block.style.display="none";
        location.reload();


    }

})
