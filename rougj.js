// Load the JSON data from an internal file
fetch('data.json')
  .then(response => response.json())
  .then(data => {

// Filter members with silver or gold status
const filteredMembers = data.members.filter(function(member) {
    return member.status === "silver" || member.status === "gold";
  });
  
  // Randomly select two memberss
  let selectedMembers = [];
  let numMembersToDisplay = Math.min(3, filteredMembers.length);
  
  for (let i = 0; i < numMembersToDisplay; i++) {
    let randomIndex = Math.floor(Math.random() * filteredMembers.length);
    let randomMember = filteredMembers.splice(randomIndex, 1)[0];
    selectedMembers.push(randomMember);
  }
  
  // Display the selected members
  selectedMembers.forEach(function(member) {
    console.log("Name: " + member.name);
    console.log("Status: " + member.status);
    console.log("-----");
  });

//call the displayMember function to render the selected members on the page
displayMembers(selectedMembers);
})
.catch(error => console.error(error));

const displayMembers = (members) => {
  const cards = document.querySelector('div.cards'); // select the output container element

  members.forEach((member) => {
    // Create elements to add to the div.cards element
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let location = document.createElement('p');
    let email = document.createElement('p');
    let phoneNumber = document.createElement('p');
    let logo = document.createElement('img');

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${member.name}`;
    location.innerHTML = `${member.location}`;
    phoneNumber.innerHTML = `${member.phoneNumber}`;
    email.innerHTML = `${member.email}`;
    
    // Build the image portrait by setting all the relevant attribute
    logo.setAttribute('src', member.imageurl);
    logo.setAttribute('alt', `${member.name}`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '340');
    logo.setAttribute('height', '440');

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(location);
    card.appendChild(phoneNumber);
    card.appendChild(email);
    card.appendChild(logo);

    cards.appendChild(card);
  }); // end of forEach loop
} // end of function expression


