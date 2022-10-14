const container_el = document.querySelector(".container");
const body_el = document.querySelector("body");

function changeBackground(){
  const bgColorCode = randomColor();
  body_el.style.backgroundColor = "#"+bgColorCode;
  // console.log("Function bgchange called");
}

for (let index = 0; index < 30; index++) {
  const colorContainer_el = document.createElement("div");
  
  colorContainer_el.classList.add("color-container");

  container_el.appendChild(colorContainer_el);
}

// randomColor();
const colorContainer_els=document.querySelectorAll(".color-container")

generateColor()

function generateColor()
{
  colorContainer_els.forEach((colorContainer_el) => {
    const newColorcode = randomColor();
    // console.log(newColorcode);
    colorContainer_el.style.backgroundColor = "#" + newColorcode;
    colorContainer_el.innerHTML = "#" + newColorcode;
  })
}


function randomColor(){
  const chars= "0123456789abcdef"
  const colorCodeLength = 6;
  let colorCode=""
  for (let index = 0; index < colorCodeLength; index++) {
    const randomNum = Math.floor(Math.random() * chars.length);
    colorCode+= chars.substring(randomNum, randomNum+1);
  }
  return colorCode;
}

setTimeout(()=>{
  location.reload();
}, 60000)
changeBackground()

