// import logo from "./logo.svg";
import "./App.css";
import Grocery from "./components/Projects/GroceryBud/Grocery";
// import ContextApi from "./components/Prop-Drilling/UseContextHookExample/UseContextHook";
// import UseFetchHook from "./components/UseFetch/UseFetchHook";
// import PropDrilling from "./components/Prop-Drilling/PropDrillimg";
// import Tour from "./components/UseEffectHooksExample/Tours/Tours";
// import Birthday from "./components/UseStateHooksExample/BirthdayReminderProject/Birthday";
// import Cleanup from "./components/UseEffectHooksExample/UseEffectCleanup";
// import UseEffectBasics from "./components/UseEffectHooksExample/UseEffectExample";
// import FirstExample from "./components/UseStateHooksExample/UseStateArrayEample";
// import UseStateObjExample from "./components/UseStateHooksExample/UseStateObjectExample";
// import MultipleStateValues from "./components/UseStateHooksExample/MultipleStateValues";
// import CounterExample from "./components/UseStateHooksExample/CounterExample";
// import UseEffectUsers from "./components/UseEffectHooksExample/UseEffectUsersExample";
// import UseReducerHook from "./components/useReducerHookexample/UseReducerSetUp";
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
      <div className="useReducer">{/* <UseReducerHook /> */}</div>
      <div className="Projects">
        {/* <Birthday /> */}
        {/* <Tour /> */}
      </div>
      <div className="prop-drilling">{/* <PropDrilling /> */}</div>
      <div className="contextHook">{/* <ContextApi /> */}</div>
      <div className="usefetchhook">{/* <UseFetchHook /> */}</div>

      <div className="Projects">
        <Grocery />
      </div>
    </div>
  );
}

export default App;
