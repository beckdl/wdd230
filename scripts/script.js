// script for year in footer
document.querySelector("#year").textContent = new Date().getFullYear();

// script for the last modified par of page
var lastMod = document.lastModified;

document.querySelector("#last").textContent = lastMod;