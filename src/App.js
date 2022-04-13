import { useEffect, useState } from "react";
import "./App.css";

import ClassyClock from "./Clocks/Classy";
import FunctionalClock from "./Clocks/Functional";

let clockIndex = 0;

function App() {
    const getID = () => clockIndex++;

    const [clocks, setClocks] = useState([]);

    const addClock = (type) => () =>
        setClocks(clocks.concat({ Type: type, id: getID() }));

    const removeClock = (index) => {
        console.log("removing", index, clocks);
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

                {clocks.map(Clock)}
            </div>
        </div>
    );
}

export default App;
