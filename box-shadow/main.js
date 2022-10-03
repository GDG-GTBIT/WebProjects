let slider = document.getElementById("myRange");
let slider1 = document.getElementById("myRange1");
let slider2 = document.getElementById("myRange2");
let slider3 = document.getElementById("myRange3");
let slider4 = document.getElementById("myRange4");
let slider5 = document.getElementById("myRange5");
let slider6 = document.getElementById("myRange6");
let slider7 = document.getElementById("myRange7");
let output = document.getElementById("demo");
let output1 = document.getElementById("demo1");
let output2 = document.getElementById("demo2");
let output3 = document.getElementById("demo3");
let output4 = document.getElementById("demo4");
let output5 = document.getElementById("demo5");
let output6 = document.getElementById("demo6");
let output7 = document.getElementById("demo7");
let finalColor = document.getElementById("finalColor");
let coloredBox = document.getElementById("coloredbox");

// console.log(finalColor);
// console.log(coloredBox);

slider.oninput = function () {
    this.style.backgroundColor = `rgba(${this.value},0,0)`;
    output4.innerText = slider.value;
    coloredBox.style.boxShadow = finalColor.innerText.toString();
}

slider1.oninput = function () {
    this.style.backgroundColor = `rgba(0,${this.value},0)`;
    output5.innerHTML = slider1.value;
    coloredBox.style.boxShadow = finalColor.innerText.toString();
}

slider2.oninput = function () {
    this.style.backgroundColor = `rgba(0,0,${this.value})`;
    output6.innerHTML = slider2.value;
    coloredBox.style.boxShadow = finalColor.innerText.toString();
}

slider3.oninput = function () {
    output7.innerHTML = slider3.value;
    coloredBox.style.boxShadow = finalColor.innerText.toString();
}

slider4.oninput = function () {
    output.innerHTML = slider4.value + 'px';
    coloredBox.style.boxShadow = finalColor.innerText.toString();
}

slider5.oninput = function () {
    output1.innerHTML = slider5.value + 'px';
    coloredBox.style.boxShadow = finalColor.innerText.toString();
}

slider6.oninput = function () {
    output2.innerHTML = slider6.value + 'px';
    coloredBox.style.boxShadow = finalColor.innerText.toString();
}

slider7.oninput = function () {
    output3.innerHTML = slider7.value + 'px';
    // console.log(finalColor.innerText);
    console.log(coloredBox.style);
    finalColor.style.boxShadow = finalColor.innerText;
    console.log(coloredBox.style);
}
// // copy.addEventListener('click', getCopied);
// // console.log(finalColor.innerText);
// coloredBox.style.boxShadow = '10px 10px 10px 4px rgba(130,255,120,0.40)';
// console.log(getComputedStyle(coloredBox).boxShadow);

function getCopied() {
    navigator.clipboard.writeText(finalColor.innerText);
    copiedColor.innerText = "Copied Color : " + finalColor.innerText;
}
