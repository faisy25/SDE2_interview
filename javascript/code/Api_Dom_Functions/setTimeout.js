// 1. Imagine a website where you want to show a welcome message to the user 2 seconds after they visit the page.

const welcomeMessage = (name) => {
  setTimeout(() => {
    console.log(`Welcome , ${name} to this website.`);
  }, 2000);
};
welcomeMessage("Faisal");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2. Automatic Logout After Inactivity
// Imagine a web application where users should be automatically logged out after 5 minutes of inactivity. The inactivity period is reset every time the user interacts with the page (e.g., mouse movement or key press).

const inActivity = () => {
  let timer;

  function resetTimer() {
    clearTimeout(timer);
    setTimeout(logout, 5000); // 30sec timer set &&  logout is the callBack function
  }

  function logout() {
    alert("You have been logout due to inactivity");
    window.location.assign("https://www.google.com");
  }

  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onkeypress = resetTimer;
};

inActivity();
