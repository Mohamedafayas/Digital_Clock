const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");
const day = document.getElementById("day");

const monthName = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'
];

const clock = setInterval(function () {
    let today = new Date();
    let d = today.getDate();
    let m = today.getMonth();
    let y = today.getFullYear();
    let h = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds(); 

    day.innerHTML = `${d} ${monthName[m]} ${y}`;

    hour.firstChild.textContent = h.toString().padStart(2, '0');
    minute.firstChild.textContent = min.toString().padStart(2, '0');
    second.firstChild.textContent = sec.toString().padStart(2, '0');
});
