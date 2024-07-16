// 1. Printing a Message Every 3 Seconds and Stopping After 13 Seconds

// const printMessage = () => {
//   const message = setInterval(
//     () => console.log("Print message after every 3 secs."),
//     3000
//   );

//   setTimeout(() => {
//     clearInterval(message);
//     console.log("Message print stopped.");
//   }, 13000);
// };

// printMessage();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Real-Time Clock Display
// In a web application, you might want to display the current time and update it every second to create a real-time clock.

let clockInterval;

const startClock = () => {
  function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const seconds = now.getSeconds().toString().padStart(2, "0");

    document.getElementById(
      "clock"
    ).textContent = `${hours} : ${minutes} : ${seconds}`;

    console.log(hours, minutes, seconds);
  }
  updateClock();
  clockInterval = setInterval(updateClock, 1000);
};

const stopClock = () => {
  clearInterval(clockInterval);
  console.log("Clock stopped");
};

document.getElementById("startBtn").addEventListener("click", startClock);
document.getElementById("stopBtn").addEventListener("click", stopClock);
