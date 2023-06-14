
// const visitsDisplay = document.querySelector("#num-visits");

// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

// function displayNumVisits (visitsDisplay, numVisits) {
//     if (!visitsDisplay) {
//         return;
//     } else {
//         if (numVisits != 0) {
//             visitsDisplay.textContent = numVisits;
//         } else {
//             visitsDisplay.textContent = `This is your first visit. 🎉 Welcome!`;
//         }
//         numVisits++;
//         localStorage.setItem("numVisits-ls", numVisits);
//     }
// }

// displayNumVisits(visitsDisplay, numVisits);

/* Last Visit */

const timeNow = new Date().getTime()

const lastVisited=document.querySelector("#lastVisited")

const lastVisit = localStorage.getItem('lastVisit');

if (!lastVisit) {

  localStorage.setItem('lastVisit', timeNow);
  
  lastVisited.textContent = 'Welcome to the discover page!';

} else {

  const timeDiff = timeNow - lastVisit;

  const daysDiff = Math.round(timeDiff / (1000 * 60 * 60 * 24));

  lastVisited.textContent = `Welcome back! It's been ${daysDiff} days since your last visit.`

  localStorage.setItem('lastVisit', timeNow);

}