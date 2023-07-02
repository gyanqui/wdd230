// Load the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const filteredMembers = data.members.filter(member => member.membership === "Silver" || member.membership === "Gold");

    let selectedMembers = [];
    let numMembersToDisplay = Math.min(3, filteredMembers.length);

    for (let i = 0; i < numMembersToDisplay; i++) {
      let randomIndex = Math.floor(Math.random() * filteredMembers.length);
      let randomMember = filteredMembers.splice(randomIndex, 1)[0];
      selectedMembers.push(randomMember);
    }

    displayMembers(selectedMembers);
  })
  .catch(error => console.error(error));

const displayMembers = (members) => {
  const spotlightCards = document.querySelector('div.spotlightCards');

  members.forEach(member => {

    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let email = document.createElement('p');
    let image = document.createElement('img');

    h2.textContent = member.name;
    address.textContent = member.address;
    email.textContent = member.email;
    image.src = member.imageurl;
    image.alt = member.name;
    image.loading = 'lazy';
    image.width = 340;
    image.height = 440;

    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(email);
    card.appendChild(image);

    spotlightCards.appendChild(card);
  });
};
