const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

gridbutton.addEventListener("click", () => {
  display.classList.remove("list");
  display.classList.add("grid");
});

  function displayDirectory(directoryLists) {
  const cards = document.querySelector('div.cards');

  directoryLists.forEach((members) => {

    let card = document.createElement('section');
    let h3 = document.createElement('h3');
    let address = document.createElement('p');
    let services = document.createElement('p');
    let email = document.createElement('p');
    let imageurl = document.createElement('img');
    let url = document.createElement('a')

    h3.textContent = `${members.name}`;
    services.innerHTML = `${members.services}`;
    address.innerHTML = `${members.address}`;
    email.innerHTML = `${members.email}`;

    url.textContent = 'Visit Site';
    url.setAttribute('href', `${members.url}`);
    url.setAttribute('target',"_blank");

    imageurl.setAttribute('src', `${members.imageurl}`);
    imageurl.setAttribute('alt', `${members.name}`);
    imageurl.setAttribute('loading', 'lazy');
    imageurl.setAttribute('width', '200');
    imageurl.setAttribute('height', '200');

    card.appendChild(h3);
    card.appendChild(services);
    card.appendChild(imageurl);
    card.appendChild(address);
    card.appendChild(email);
    card.appendChild(url)

    cards.appendChild(card);

  });
}

directoryList = {};

const url = 'data.json';

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.directory);  // note that we reference the directory array of the data object given the structure of the json file
    directoryList = data.members;
    displayDirectory(directoryList);
}

getDirectoryData();