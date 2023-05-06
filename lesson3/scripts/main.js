// Get the current year
let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = currentYear;

// Get the last update Modified date
const lastUpdated = new Date(document.lastModified);
const lastUpdatedElement = document.getElementById("lastUpdated");
lastUpdatedElement.textContent = document.lastModified;