import { useEffect, useRef } from "react";

export default ({ id }) => {
    const DOM = useRef();

    const DOMClock = (id) => {
        let timer;

        const startClock = () => {
            timer = setInterval(updateTime, 1000);
        };

        const stopClock = () => {
            clearInterval(timer);
            timer = null;
        };

        const toggleClock = () => {
            timer ? stopClock() : startClock();
            updateButton();
        };

        const remove = () => {
            Clock.remove();
        };

        const Clock = document.createElement("div");
        Clock.innerHTML = `
            <h1>A DOM Clock! (${id})</h1>
            <h2>...</h2>

            <button class='toggle'>...</button>
            <button class='remove'>Remove me!</button>
        `;

        const timeH2 = Clock.querySelector("h2");
        const updateTime = () => {
            const time = new Date();
            timeH2.innerHTML = time.toLocaleTimeString();
        };

        const removeButton = Clock.querySelector(".remove");
        const toggleButton = Clock.querySelector(".toggle");

        const updateButton = () => {
            toggleButton.innerHTML = timer ? "Stop" : "Start";
        };

        toggleButton.addEventListener("click", toggleClock);
        removeButton.addEventListener("click", remove);

        toggleClock();
        updateTime();

        return Clock;
    };

    useEffect(() => DOM.current.appendChild(DOMClock(id)), []);

    return <div ref={DOM} />;
};
