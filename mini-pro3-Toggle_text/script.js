const heading = document.getElementById("status");
const button = document.getElementById("toggleBtn");

let isOn = false;

button.addEventListener("click", function () {
    if (isOn === false) {
        heading.textContent = "ON";
        heading.style.color = "green";
        isOn = true;
    } else {
        heading.textContent = "OFF";
        heading.style.color = "red";
        isOn = false;
    }
});
