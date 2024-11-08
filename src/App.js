import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
    const [count, setCount] = useState(0);

    const incrementCounter = (by) => {
        setCount(count + by);
    };

    const decrementCounter = (by) => {
        setCount(count - by);
    };

    const resetCounter = () => {
        setCount(0);
    };

    return (
        <div className="App">
            <button onClick={() => incrementCounter(1)}>+</button>
            <div>{count}</div>
            <button onClick={() => decrementCounter(1)}>-</button>
            <div>
                <button onClick={() => resetCounter()}>Reset</button>
            </div>
        </div>
    );
}

export default App;
