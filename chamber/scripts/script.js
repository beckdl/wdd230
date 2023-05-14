// button menu

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');

x.onclick = toggleMenu;

// current date

const datefield = document.querySelector("time");

const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);

datefield.textContent = fulldate;

// script for year in footer
document.querySelector("#year").textContent = new Date().getFullYear();

// script for the last modified par of page
var lastMod = document.lastModified;

document.querySelector("#last").textContent = lastMod;