let fruitData;

function createFruitSelect(selectId) {
    const selectElement = document.createElement('select');
    selectElement.id = selectId;
    selectElement.required = true;
    selectElement.innerHTML = `<option value="" selected disabled>Select a fruit</option>` +
        fruitData.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`).join('');

    return selectElement;
}

fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
    .then(response => response.json())
    .then(data => {
        fruitData = data;

        const fruit1Span = document.getElementById('fruit1Span');
        const fruit2Span = document.getElementById('fruit2Span');
        const fruit3Span = document.getElementById('fruit3Span');

        const fruit1Select = createFruitSelect('fruit1');
        const fruit2Select = createFruitSelect('fruit2');
        const fruit3Select = createFruitSelect('fruit3');

        fruit1Span.replaceWith(fruit1Select);
        fruit2Span.replaceWith(fruit2Select);
        fruit3Span.replaceWith(fruit3Select);
    })
    .catch(error => {
        console.error('Error fetching fruit data:', error);
    });

document.getElementById('drink-form').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const firstName = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const fruit1 = document.getElementById('fruit1').value;
    const fruit2 = document.getElementById('fruit2').value;
    const fruit3 = document.getElementById('fruit3').value;
    const instructions = document.getElementById('instructions').value;

    function findFruitById(id) {
        return fruitData.find(fruit => fruit.id === parseInt(id));
    }

    function findFruitNameById(id) {
        const fruit = findFruitById(id);
        return fruit ? fruit.name : 'Unknown Fruit';
    }

    const selectedFruits = [
        findFruitById(fruit1),
        findFruitById(fruit2),
        findFruitById(fruit3)
    ];

    let totalCarbohydrates = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCalories = 0;
    let totalSugar = 0;

    for (const fruit of selectedFruits) {
        totalCarbohydrates += fruit.nutritions.carbohydrates;
        totalProtein += fruit.nutritions.protein;
        totalFat += fruit.nutritions.fat;
        totalCalories += fruit.nutritions.calories;
        totalSugar += fruit.nutritions.sugar;
    }

    const currentDate = new Date().toLocaleDateString();
    const orderDetails = `
        <h3>Order Details:</h3>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Fruit 1:</strong> ${findFruitNameById(fruit1)}</p>
        <p><strong>Fruit 2:</strong> ${findFruitNameById(fruit2)}</p>
        <p><strong>Fruit 3:</strong> ${findFruitNameById(fruit3)}</p>
        <p><strong>Special Instructions:</strong> ${instructions}</p>
        <p><strong>Order Date:</strong> ${currentDate}</p>
    `;

    const nutritionalInfo = `
        <h3>Nutritional Information:</h3>
        <p><strong>Total Carbohydrates:</strong> ${totalCarbohydrates.toFixed(2)} g</p>
        <p><strong>Total Protein:</strong> ${totalProtein.toFixed(2)} g</p>
        <p><strong>Total Fat:</strong> ${totalFat.toFixed(2)} g</p>
        <p><strong>Total Calories:</strong> ${totalCalories} cal</p>
        <p><strong>Total Sugar:</strong> ${totalSugar.toFixed(2)} g</p>
    `;

    document.getElementById('order-details').innerHTML = orderDetails;
    document.getElementById('nutritional-info').innerHTML = nutritionalInfo;
});
