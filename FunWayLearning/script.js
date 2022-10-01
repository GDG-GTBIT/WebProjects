let background = document.querySelector('.uppercontainer');
let arr = ['images/fun17.jpeg','images/fun30.jpeg','images/fun33.jpeg','images/fun10.jpeg'];
// final 'images/fun6.jpeg' 'images/fun14.jpeg' 6 18 10
// ,'images/4.jpg' 15 17
let n = arr.length;
let ptr=0;
let leftBtn = document.querySelector(".icnleft");
let rightBtn = document.querySelector(".icnright");
let pagination = document.querySelectorAll(".fa-circle")

leftBtn.addEventListener("click",function(e){
    pagination[ptr].classList.remove("far");
    pagination[ptr].classList.add("fas");
    ptr = (ptr-1)%n;
    if(ptr<0)
    ptr=n-1;
    background.style.background = `url(${arr[ptr]})`;
    background.style.backgroundSize = "cover";
    pagination[ptr].classList.remove("fas");
    pagination[ptr].classList.add("far");
});

rightBtn.addEventListener("click",function(e){
    
    pagination[ptr].classList.remove("far");
    pagination[ptr].classList.add("fas");
    ptr = (ptr+1)%n;
    background.style.background = `url(${arr[ptr]})`;
    background.style.backgroundSize = "cover";
    
    pagination[ptr].classList.remove("fas");
    pagination[ptr].classList.add("far");
});

let lifeimg = document.querySelector(".lifeimg");
let allImage = document.querySelectorAll(".imgcontainer img");
for(let i=0;i<allImage.length;i++){
    allImage[i].addEventListener("click",(e)=>{
        for(let j=0;j<allImage.length;j++){
            allImage[j].classList.remove("activeimg");
        }
        allImage[i].classList.add("activeimg");
        lifeimg.src = allImage[i].src;
    });
}