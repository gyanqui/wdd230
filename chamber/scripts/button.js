const joinButton = document.getElementById("join-button");
const moreInfoButton = document.getElementById('more-info');

joinButton.addEventListener("click", function() {
  window.location.href = "../chamber/join.html";
});

moreInfoButton.addEventListener('click', function() {
  window.location.href = 'https://www.xapiriground.org/';
});