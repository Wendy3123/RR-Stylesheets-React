import "./App.css";
import ComponentOne from "./Components/componentOne.js";
import ComponentTwo from "./Components/componentTwo";
import ComponentThree from "./Components/componentThree";

const TWO = {
  backgroundColor: "yellow",
  padding: "50px",
  margin: "50px",
  fontSize: "50px",
};

function App() {
  return (
    <>
      <div className="App">
        <h1>Hello World</h1>
        <ComponentOne />
        <ComponentTwo TWO={TWO} />
        <ComponentThree />
      </div>
    </>
  );
}

export default App;
