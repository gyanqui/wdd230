const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets); 
    prophetList = data.prophets;
    displayProphets(prophetList);
}

getProphetData();

function displayProphets(prophets) {
    const cards = document.querySelector('div.cards');

    prophets.forEach(prophet => {
        const card = document.createElement('section');
        const h2 = document.createElement('h2');
        const portraitImg = document.createElement('img');
        const dob = document.createElement('p');
        const pob = document.createElement('p');

        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        dob.textContent = `Date of Birth: ${prophet.birthdate}`;
        pob.textContent = `Place of Birth: ${prophet.birthplace}`;

        portraitImg.setAttribute('src', prophet.imageurl);
        portraitImg.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portraitImg.setAttribute('loading', 'lazy');
        portraitImg.setAttribute('width', '340');
        portraitImg.setAttribute('height', '440');

        card.appendChild(h2);
        card.appendChild(dob);
        card.appendChild(pob);
        card.appendChild(portraitImg);

        cards.appendChild(card);
    });
}