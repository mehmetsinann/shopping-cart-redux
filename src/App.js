import React from "react"
import Counter from './components/Counter';
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseByTwoCounter from "./components/IncreaseByTwoCounter";
import IncreaseCounter from "./components/IncreaseCounter";
import ResetCounter from "./components/ResetCounter";

function App() {
  return (
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
      <Counter />
      <IncreaseCounter />
      <DecreaseCounter />
      <IncreaseByTwoCounter />
      <ResetCounter />
    </div>
  );
}

export default App;
