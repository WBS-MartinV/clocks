import { useEffect, useState } from "react";
import "./App.css";

import ClassyClock from "./Clocks/Classy";
import FunctionalClock from "./Clocks/Functional";
import DOMClock from "./Clocks/DOM";

let clockIndex = 0;
const getID = () => clockIndex++;

function App() {
    const [clocks, setClocks] = useState([]);

    const addClock = (type) => () => {
        setClocks(clocks.concat({ Type: type, id: getID() }));
    }

    const removeClock = (index) => {
        setClocks(
            clocks.filter((item, i) => {
                return i !== index;
            })
        );
    };

    const Clock = ({ Type, id }, index) => {
        return <Type key={id} id={id} remove={() => removeClock(index)} />;
    };

    return (
        <div className="App">
            <div className="clocks">
                <button onClick={addClock(ClassyClock)}>
                    Add a Class Clock!
                </button>
                <button onClick={addClock(FunctionalClock)}>
                    Add a Functional Clock!
                </button>
                <button onClick={addClock(DOMClock)}>
                    Add a DOM Clock!
                </button>

                {clocks.map(Clock)}
            </div>
        </div>
    );
}

export default App;
