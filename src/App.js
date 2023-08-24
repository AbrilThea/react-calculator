import { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { H1 } from "./components/H1";

function App() {
  const [total, setTotal ] = useState(0);
  const [firstNumber, setFirstNumber] = useState("");
  const [secondNumber, setSecondNumber] = useState("");

  const clickCalculate = (symbol)=> {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      setTotal("Invalid input");
      return;
    }
    
    switch (symbol){
      case "+":
        return setTotal(firstNumber + secondNumber);
      case "-":
        return setTotal(firstNumber - secondNumber);
      case "*":
        return setTotal(firstNumber * secondNumber);
      case "/":
        return setTotal(firstNumber / secondNumber);
      default:
        return "invalid please try again";
    }
  }
  


  return (
    <>
      <H1 label="A simple calculator"/>
      <H1 label={total}/>
      <div className="row">
        <Input type="number" placeholder="Enter your first number" step={0.25} onChange={(e)=>  setFirstNumber(Number(e.target.value))} value={firstNumber}/>
        <Input type="number" placeholder="Enter your second number" step={0.25} onChange={(e)=>  setSecondNumber(Number(e.target.value))} value={secondNumber}/>
      </div>
      <div className="grid">
        <Button label="+" onClick={()=> clickCalculate("+")}/>
        <Button label="-" onClick={()=> clickCalculate("-")}/>
        <Button label="/" onClick={()=> clickCalculate("/")}/>
        <Button label="x" onClick={()=> clickCalculate("*")}/>
      </div>
    </>
  );
}

export default App;
