import { Color } from "./Components/Colors";
import { Counter } from "./Components/Counter";
import { Signup } from "./Components/Signup";
import { ToDo } from "./Components/ToDo";
function App() {
  return <div className="App">

    <Counter />
    <br />
    <hr/>
    <br/>
    <Color />
    <br />
    <hr/>
    <br/>
    < ToDo/>
    <br />
    <hr/>
    <br/>
    <Signup/>
  </div>;
}

export default App;
