console.log(React);
console.log(ReactDOM);

// React and ReactDOM are made available to use because we included those script files

console.log("Hello World");

// JSX- Javascript XML

// This is javascript syntax extension but not actually a part of javascript

// React provides us JSX to easily inject data into templates and render it

// We will use Babel to compile the JSX code to ES5 code so that the browser can understand

let template = (
  <p class="hello org" id="para">
    Hello world
  </p>
);

// This is will be the compiled version by Babel for the above JSX

// ReactDOM.render(template, document.querySelector(".container-1"));

// We need to include certain presets so that the Babel compiler can take of and compile our ES6,ES7 and JSX code into ES5

// In the src folder we will be writing our JSX and ES6 code and then compile into ES5 and store it in scripts folder

// The command to compile is

// babel src/app.js --out-file=scripts/app.js --presets=env,react

// If we run this command then it will keep on watching the src file for changes and then it will automatically change the script file

// babel src/app.js --out-file=scripts/app.js --presets=env,react --watch

let template2 = <h4> This is H4 Tag used to represent sub-headings</h4>;

// While writing a template we must ensure that everything is wrapped under one root element

let template3 = (
  <div>
    <h1>This is the main Component</h1>
    <h2>Cheers</h2>
  </div>
);

// Challenge

// let a = {
//   b: {
//     c: 20,
//   },
// };

// a?.b?.c;

/*

function checkgender(gender) {
  if (gender) return <p>Gender : {gender}</p>;
}

fetch("http://127.0.0.1:8000/data")
  .then((data) => data.json())
  .then((data_points) => {
    console.log(data_points.Skills.map((mov) => <li>mov</li>));
    let template4 = (
      <div>
        <h1>Name: {data_points.Name ? data_points.Name : "Anonymous"}</h1>
        <p>Age: {data_points.Age}</p>
        <p>Type : {data_points.Age >= 18 ? "Adult" : "Not an Adult"}</p>
        {checkgender(data_points.gender)}
        {undefined}
        <p>Location: {data_points.Location}</p>
        {data_points.Program && <p>Program : {data_points.Program}</p>}
        {data_points.Skills && <h3>Skills</h3>}

        {data_points.Skills && (
          <ol>
            {data_points.Skills.map((mov) => (
              <li> {mov} </li>
            ))}
          </ol>
        )}
      </div>
    );

    // This is javascript expression

    // There is also conditional rendering and conditional logic for displaying the data

    // There are some ways of adding conditional logic
    // 1. Using if-statements
    // 2. Using ternary operators
    // 3. Logical and operator

    // We cannot directly use if-statements in the JSX as they are not expressions

    // We know that if we have not set function to return anything then it will simply return undefined but we see in JSX undefined means nothing that is nothing is displayed

    // As ternary operator is a expression so we don't need to use it in a separate function and then convert it into a expression because we know that whenever we call a function it returns a expression

    // undefined,null and booleans are ignored by JSX

    ReactDOM.render(template4, document.querySelector(".main-container"));
  });

// If we try to render on the same component it will delete the content we rendered on that particular div element



*/
// Lecture-10 12:10
// ReactDOM.render(template3, document.querySelector(".main-container"));

/*

let count = 0;

function inc() {
  count += 1;
  updateTimer();
}

function dec() {
  count -= 1;
  updateTimer();

  // Here we are just re-rendering everything but React is so powerful that it does not re-renders everything instead it has a virtual DOM algorithm running behind the scenes which finds the minimal number of changes and changes that only instead of changing the other elements of the DOM.
  // Some steps it does that we know that template is a Object and thus it does a comparison of new object and the previous object and this takes less time compared to rendering a total new object and thus it becomes more and more efficient
}

function Labelclick() {
  console.log("Clicked on Label");
}

function reset() {
  count = 0;
  updateTimer();
}

function updateTimer() {
  // let template5 = (
  //   <div>
  //     <button id="decrement" className="button decrement">
  //       -1
  //     </button>
  //     <label> {count} </label>
  //     <button id="increment" className="button increment">
  //       +1
  //     </button>
  //   </div>
  // );

  let template6 = (
    <div>
      <button onClick={dec}>-1</button>
      <label onClick={Labelclick}> {count} </label>
      <button onClick={inc}>+1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  // We use className over here because class is a reserved keyword in Javascript for making classes

  // With the help of onClick we can have a function which can be executed whenever we click that button

  ReactDOM.render(template6, document.querySelector(".Timer"));
}

updateTimer();

[...document.querySelectorAll("button")].forEach(
  (mov) => (mov.style.margin = "10px")
);

// document.querySelector(".Timer").addEventListener("click", function () {
//   if (event.target.classList.contains("increment")) {
//     count += 1;
//   }
//   if (event.target.classList.contains("decrement")) {
//     count -= 1;
//   }

//   updateTimer();
// });

// This is the traditional way of doing it


*/

let appointments = [];

class Appointment {
  constructor(patient, doctor) {
    this.patient = patient;
    this.doctor = doctor;
  }
}

function pickPatient() {
  let rand_index = Math.trunc(Math.random() * appointments.length);

  alert(`Patient ID : ${appointments[rand_index].patient}`);
}

function AppointmentFormSubmit(e) {
  e.preventDefault();

  let patient_ID = e.target.elements.P_UNIQUE_ID.value;
  let doctor_ID = e.target.elements.D_UNIQUE_ID.value;

  if (!(patient_ID && doctor_ID)) return;
  if (
    !(
      appointments.some((mov) => mov.patient == patient_ID) &&
      appointments.some((mov) => mov.doctor == doctor_ID)
    )
  )
    appointments.push(new Appointment(patient_ID, doctor_ID));

  let template8 = (
    <div>
      <h3>Appointment List</h3>
      <table>
        <tbody>
          <tr>
            <td>PATIENT ID</td>
            <td> {"⏩⏩"} </td>
            <td>DOCTOR ID</td>
          </tr>

          {appointments.map((mov, i) => (
            <tr key={i + 1}>
              <td>{mov.patient}</td>
              <td> {"⏩⏩"} </td>
              <td>{mov.doctor}</td>
            </tr>
          ))}
          {/* key is meant for optimization of rendering */}
        </tbody>
      </table>
    </div>
  );

  // We know that React uses certain comments to optimize the rendering process and thus in case of the array it is not able to do automatically and therefore we have to set the key value of the wrapper element

  // In JSX {[1,2,3,4]} is converted to {1}{2}{3}{4} and then it is rendered

  e.target.elements.P_UNIQUE_ID.value = "";
  e.target.elements.D_UNIQUE_ID.value = "";

  ReactDOM.render(template8, document.querySelector(".Appointment-list"));
  render();
  console.log("Form Submitted");
}

let render = () => {
  let template7 = (
    <div>
      <h3>Appointment Page</h3>
      <form onSubmit={AppointmentFormSubmit}>
        <label>Patient ID : </label>
        <input type="text" name="P_UNIQUE_ID" />
        <br></br>
        <br></br>
        <label>Doctor ID : </label>
        <input type="text" name="D_UNIQUE_ID" />
        <br></br>
        <br></br>

        <button>Add</button>
      </form>

      <br></br>
      <br></br>
      <br></br>
      <button disabled={appointments.length === 0} onClick={pickPatient}>
        {/*appointments.length > 0 ? "" : "disabled"*/}
        Which patient should I check first ?
      </button>
    </div>
  );

  ReactDOM.render(template7, document.querySelector(".Appointment-form"));
};

render();

let hidden = true;

function render2() {
  let template9 = (
    <div>
      <h3>Visibility Toggle</h3>
      <button
        onClick={() => {
          hidden = !hidden;
          render2();
        }}
      >
        {hidden ? "Show Details" : "Hide Details"}
      </button>
      {hidden ? "" : <p>Hey ! this is a hidden text</p>}
    </div>
  );

  ReactDOM.render(template9, document.querySelector(".visibility-toggle"));
}

render2();

// React works on the architecture of components

// We try to see whichever component having same structure just the data is changing we can bring it into a component
