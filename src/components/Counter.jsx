import { useState } from "react";
import { CounterButton } from "./CounterButton";

export function Counter() {
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
        <>
            <span className="totalCount">{count}</span>
            <CounterButton by={1} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
            <CounterButton by={2} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
            <CounterButton by={5} incrementMethod={incrementCounter} decrementMethod={decrementCounter} />
            <button className="resetButton" onClick={() => resetCounter()}>
                Reset
            </button>
        </>
    );
}
