let currentYear = new Date().getFullYear();
document.querySelector("#year").textContent = currentYear;
document.querySelector("#lastUpdate").textContent = document.lastModified;


const headerdate = document.querySelector("#date");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
headerdate.innerHTML = `<strong>${fulldate}</strong>.`;


function toggleMenu (){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById("hamburgerBtn")
x.onclick = toggleMenu;


const currentDate = new Date();
const currentDay = currentDate.getDay(); // Get the current day of the week (0 = Sunday, 1 = Monday, etc.)

if (currentDay === 1 || currentDay === 2) { // Check if it's Monday or Tuesday
    const banner = document.createElement('div');
    banner.id = 'banner';
    banner.innerHTML = `"🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."`;

    const header = document.querySelector('.site-header');
    header.insertBefore(banner, header.firstChild);
}

const joinButton = document.getElementById("joinButton");

joinButton.addEventListener("click", function() {
  // Acción que se realizará al hacer clic en el botón "Join Chamber"
});