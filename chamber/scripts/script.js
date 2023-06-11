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

// banner

const currentDay = now.getDay();

const banner = document.getElementById("banner");

if (currentDay === 1 || currentDay === 2) {
    banner.style.display = "block";
};

// form

const formDate = document.querySelector(".formDate");
// For todays date;
Date.prototype.today = function () { 
    return ((this.getDate() < 10)?"0":"") + this.getDate() +"/"+(((this.getMonth()+1) < 10)?"0":"") + (this.getMonth()+1) +"/"+ this.getFullYear();
}

// For the time now
Date.prototype.timeNow = function(){     
    return ((this.getHours() < 10)?"0":"") + ((this.getHours()>12)?(this.getHours()-12):this.getHours()) +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes() + ((this.getHours()>12)?(' PM'):' AM'); 
};
var formTime = new Date().today() + " " + new Date().timeNow();
formDate.textContent = formTime;

