
const visitsDisplay = document.querySelector("#num-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

function displayNumVisits (visitsDisplay, numVisits) {
    if (!visitsDisplay) {
        return;
    } else {
        if (numVisits != 0) {
            visitsDisplay.textContent = numVisits;
        } else {
            visitsDisplay.textContent = `This is your first visit. 🎉 Welcome!`;
        }
        numVisits++;
        localStorage.setItem("numVisits-ls", numVisits);
    }
}

displayNumVisits(visitsDisplay, numVisits);