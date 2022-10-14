import "./App.css";

function App() {
  const body = document.querySelector("body");

  function createHeartOne() {
    const heart = document.createElement("div");
    heart.className = "heartMoveOne";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
  }

  function createHeartTwo() {
    const heart = document.createElement("div");
    heart.className = "heartMoveTwo";
    heart.innerHTML = "❤️";
    heart.style.top = Math.random() * 100 + "vh";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
  }

  function createHeartThree() {
    const heart = document.createElement("div");
    heart.className = "heartMoveThree";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    body.appendChild(heart);
  }

  
  document.addEventListener('keydown', (event) => {
    var keyValue = event.key;

    if( keyValue.toLowerCase() === 'a')
    {
      createHeartTwo();
    }

    if( keyValue.toLowerCase() ==='s')
    {
      createHeartOne();
    }
    
    if( keyValue.toLowerCase() === 'd')
    {
      createHeartThree();
    }
  })




  return (
    <div className="App">
      <div id="container">
        <button onClick={createHeartOne}> Down</button>
      </div>

      <div id="container">
        <button onClick={createHeartTwo}> Right</button>
      </div>
      <div id="container">
        <button onClick={createHeartThree}> Diagonal</button>
      </div>
    </div>
  );
}

export default App;
