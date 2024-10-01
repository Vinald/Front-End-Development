let hr = document.querySelector("#hr");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");

setInterval(() => {
    let day = new Date();

    // Analog Clock
    let hh = day.getHours() * 30; // 360/12 = 30
    let mm = day.getMinutes() * 6; // 360/60 = 6
    let ss = day.getSeconds() * 6; // 360/60 = 6

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`; // Add minute hand influence to hour hand
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

    // Digital Clock
    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();

    let am = h >= 12 ? "PM" : "AM"; // Determine AM or PM

    // 24-hour format to 12-hour format conversion
    if (h > 12) {
        h = h - 12;
    }

    // Add a leading zero for single-digit numbers
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    ampm.innerHTML = am;
}, 1000); // Update every second
