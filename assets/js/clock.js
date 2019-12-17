const clock = document.getElementById("jsClock");

export const handleShowClock = ({ second }) => {
    console.log(second);
    clock.innerHTML = `${second}`;
};