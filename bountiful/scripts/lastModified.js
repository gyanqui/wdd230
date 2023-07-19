let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;
document.querySelector("#lastUpdate").textContent = document.lastModified;


const headerdate = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
headerdate.innerHTML = `<strong>${fulldate}</strong>.`;