const temp = document.getElementById("temp").innerText;

const speed = document.getElementById("speed").innerText;

var factor = 35.74 + (0.6215 * temp) - (35.75 * (speed ** 0.16)) + (0.4275 * temp * (speed ** 0.16));

const q = "N/A";

if (temp <= 50 && speed > 3) {
    document.getElementById("chill").innerHTML = factor.toFixed(2);
}
else {
    document.getElementById("chill").innerHTML = q;
}