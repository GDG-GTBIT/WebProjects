const imgContainer_el = document.querySelector(".image-container");
const imgCount_el = document.querySelector(".img-count");
const body_el = document.getElementById("body");

const counter_el = document.getElementById("update-count");
const btn_el =document.querySelector(".btn");

window.addEventListener("load", ()=>{
  update_background();
})

function update_background()
{
  const bgColor = randomColor();
  document.body.style.backgroundColor= "#"+bgColor;

}


let counter = 4;

let previousColor = btn_el.style.color;

btn_el.addEventListener("click", ()=>{
  
  let imageNum = Math.floor(Math.random()*10);
  addNewImage(imageNum); 
  counter = updateCounter(imageNum);
  counter_el.innerText = counter;
  const bgColor = randomColor();
  btn_el.style.backgroundColor = "#"+bgColor;
  update_PreviousColor(bgColor);
  
});

function addNewImage(imageNum){
  for (let index = 0; index < imageNum; index++) {
  const newImg_el = document.createElement("img");
  newImg_el.src = `https://picsum.photos/200/300?random=${(Math.floor(Math.random() *2000))}`;
  imgContainer_el.appendChild(newImg_el);
  updateCounter();

    
  }
}

btn_el.addEventListener("mouseover", ()=>{
  const textColor = randomColor2();
  btn_el.style.backgroundColor = "#"+textColor;


});

btn_el.addEventListener("mouseleave",()=>{
  btn_el.style.backgroundColor = previousColor;
});

imgCount_el.addEventListener("mouseover",()=>{
  const textColor = randomColor2();
  imgCount_el.style.backgroundColor = "#"+textColor;
});

imgCount_el.addEventListener("click",()=>{
  const textColor = randomColor();
  imgCount_el.style.color = "#"+textColor;
})

imgCount_el.addEventListener("mouseleave",()=>{
  imgCount_el.style.backgroundColor = "transparent";
});


function randomColor(){
  let newColorcode = "";
  const chars = "123456789abcdef";
  const colorCodelength = 6;
  for (let index = 0; index < colorCodelength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length)
    newColorcode+= chars.substring(randomNum, randomNum+1);
  }
  return newColorcode;
}

function randomColor2(){
  let newColorcode = "";
  const chars = "fedcba9876543210";
  const colorCodelength = 6;
  for (let index = 0; index < colorCodelength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length)
    newColorcode+= chars.substring(randomNum, randomNum+1);
  }
  return newColorcode;
}

function updateCounter(imageNum){
  return counter+imageNum;
}

function update_PreviousColor(bgColor){
  previousColor = "#"+bgColor;
}