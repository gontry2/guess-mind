const clock = document.getElementById("jsClock");

export const handleShowClock = ({ second }) => {
    clock.innerHTML = `${second}`;
};

export const handleHideClock = () => {
    console.log("handleHideClock");
    clock.innerHTML = "";
};