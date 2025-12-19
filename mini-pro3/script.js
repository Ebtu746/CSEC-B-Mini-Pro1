const heading = document.getElementById("status");
const button = document.getElementById("toggleBtn");

let isOn = false;

button.addEventListener("click", function () {
    if (isOn === false) {
        heading.textContent = "ON";
        isOn = true;
    } else {
        heading.textContent = "OFF";
        isOn = false;
    }
});
