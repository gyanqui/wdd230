// Get the current year
let currentYear = new Date().getFullYear();
document.querySelector('#currentYear').textContent = currentYear;

// Get the last update Modified date
const lastUpdated = new Date(document.lastModified);
const lastUpdatedElement = document.getElementById("lastUpdated");
const formattedDate = lastUpdated.toLocaleDateString("en-US", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	hour: "2-digit",
	minute: "2-digit",
	second: "2-digit",
	hour12: false 
});
lastUpdatedElement.textContent = formattedDate;