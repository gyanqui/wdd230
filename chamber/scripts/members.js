// Load the JSON data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // Filter members with silver or gold membership
    const filteredMembers = data.members.filter(member => member.membership === "Silver" || member.membership === "Gold");

    // Randomly select three members
    let selectedMembers = [];
    let numMembersToDisplay = Math.min(3, filteredMembers.length);

    for (let i = 0; i < numMembersToDisplay; i++) {
      let randomIndex = Math.floor(Math.random() * filteredMembers.length);
      let randomMember = filteredMembers.splice(randomIndex, 1)[0];
      selectedMembers.push(randomMember);
    }

    // Display the selected members
    displayMembers(selectedMembers);
  })
  .catch(error => console.error(error));

const displayMembers = (members) => {
  const cartas2 = document.querySelector('div.cartas2'); // Select the output container element

  members.forEach(member => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let email = document.createElement('p');
    let image = document.createElement('img');

    // Set the content and attributes of the elements
    h2.textContent = member.name;
    address.textContent = member.address;
    email.textContent = member.email;
    image.src = member.imageurl;
    image.alt = member.name;
    image.loading = 'lazy';
    image.width = 340;
    image.height = 440;

    // Append the elements to the card
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(email);
    card.appendChild(image);

    // Append the card to the cards container
    cartas2.appendChild(card);
  });
};
