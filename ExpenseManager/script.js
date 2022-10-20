var moneyMinus = 0;
var moneyPlus = 0;
var balance = 0;

document.querySelector(".btn").addEventListener('click', (e) => {
    e.preventDefault();
    const text = document.querySelector('#text').value;
    const amount = Number(document.querySelector('#amount').value);

    if (text === '') {
        alert("Text field can't be empty");
    }
    else if (amount === '') {
        alert("Amount can't be empty");
    }
    else {
        amount >= 0 ? (moneyPlus += amount) : (moneyMinus += (-1 * amount));
        var li = document.createElement(li);
        li.innerHTML = ` <li class="${amount >= 0 ? "plus" : "minus"}">
        ${ text } <span> ${amount >= 0 ? `${amount}` : `${amount}`}</span><button class="delete-btn" onClick="del(event)">x</button>
      </li>`


        document.querySelector(".list").appendChild(li);
        document.querySelector("#money-minus").innerText = `$${moneyMinus}`;
        document.querySelector("#money-plus").innerText = `$${moneyPlus}`;


        balance = Number(moneyPlus - moneyMinus);

        document.querySelector("#balance").innerHTML = `$${balance}`;

        document.querySelector('#text').value=" ";
        document.querySelector('#amount').value=" ";
    }


});

const del = (e)=>{
    e.target.parentNode.remove();
}