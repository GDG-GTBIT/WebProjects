const form_el = document.querySelector(".form");

const input_el = document.querySelector(".input");

const ul_el = document.querySelector(".list");


let list = JSON.parse(localStorage.getItem("list"));

const color_list = ["rgb(210, 231, 250)", "pink", "lightblue", "blanchedalmond", "rgb(234, 192, 240)" ]


if(list){
//   console.log("length = " + list.length)
// console.log(list);
list.forEach((task)=>{
  todoList(task)
})
}

function getlist_length(){
  return list.length;
}

form_el.addEventListener("submit", (event)=>{
  // window.alert("Added to list");
  event.preventDefault();
  todoList();
});

function todoList(task){
  let new_task = input_el.value;

  if(task){
    new_task= task.name;
  }

  let list_length = getlist_length();

  const li_el = document.createElement("li");
  if(task && task.checked){
    li_el.classList.add("checked");
  }

  li_el.innerText = new_task;
  li_el.style.backgroundColor = color_list[list_length%5];
  ul_el.appendChild(li_el);
  input_el.value = "";
  const checkBtn_el = document.createElement("div");
  checkBtn_el.innerHTML = `<i class="fa-solid fa-square-check">`;
  li_el.appendChild(checkBtn_el);

  const trashBtn_el = document.createElement("div");
  trashBtn_el.innerHTML = `<i class="fa-solid fa-trash-can">`;
  li_el.appendChild(trashBtn_el);

  checkBtn_el.addEventListener("click", ()=>{
    li_el.classList.toggle("checked");
    updateLocalStorage();
  });

  trashBtn_el.addEventListener("click", ()=>{
    li_el.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage(){
  const liEls = document.querySelectorAll("li");

  list = [];
  liEls.forEach((liEl) => {
    list.push({
      name : liEl.innerText,
      checked : liEl.classList.contains("checked"),
    });
  });
  localStorage.setItem("list", JSON.stringify(list));
}

