// import logo from "./logo.svg";
import "./App.css";
// import Cleanup from "./components/UseEffectHooksExample/UseEffectCleanup";
// import UseEffectBasics from "./components/UseEffectHooksExample/UseEffectExample";
// import FirstExample from "./components/UseStateHooksExample/UseStateArrayEample";
// import UseStateObjExample from "./components/UseStateHooksExample/UseStateObjectExample";
// import MultipleStateValues from "./components/UseStateHooksExample/MultipleStateValues";
// import CounterExample from "./components/UseStateHooksExample/CounterExample";
// import UseEffectUsers from "./components/UseEffectHooksExample/UseEffectUsersExample";
import UseReducerHook from "./components/useReducerHookexample/UseReducerSetUp";
function App() {
  return (
    <div className="App">
      <div className="useStateHook">
        {/* <h1>useStateHook</h1> */}
        {/* <FirstExample /> */}
        {/* <UseStateObjExample /> */}
        {/* <MultipleStateValues /> */}
        {/* <CounterExample /> */}
      </div>

      <div className="useEffect">
        {/* <UseEffectBasics /> */}
        {/* <Cleanup /> */}
        {/* <UseEffectUsers /> */}
      </div>
      <div className="useReducer">
        <UseReducerHook />
      </div>
    </div>
  );
}

export default App;
