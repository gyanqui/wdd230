let fruitData; // Variable to store the fetched fruit data

// Fetch the fruit data from the JSON source
fetch('https://brotherblazzard.github.io/canvas-content/fruit.json')
  .then(response => response.json())
  .then(data => {
    fruitData = data; // Store the fetched fruit data in the variable

    // Populate the select elements with fruit options
    const fruitOptions = data.map(fruit => `<option value="${fruit.id}">${fruit.name}</option>`);
    document.getElementById('fruit1').innerHTML = fruitOptions.join('');
    document.getElementById('fruit2').innerHTML = fruitOptions.join('');
    document.getElementById('fruit3').innerHTML = fruitOptions.join('');
  })
  .catch(error => {
    console.error('Error fetching fruit data:', error);
});

document.getElementById('drink-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission

  // Get user input values
  const firstName = document.getElementById('first-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fruit1 = document.getElementById('fruit1').value;
  const fruit2 = document.getElementById('fruit2').value;
  const fruit3 = document.getElementById('fruit3').value;
  const instructions = document.getElementById('instructions').value;

  // Find the selected fruits' nutritional information
  const selectedFruits = [
    findFruitById(fruit1),
    findFruitById(fruit2),
    findFruitById(fruit3)
  ];

  // Calculate total nutritional values
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

  // Format the order details and nutritional information
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

  // Display the order details and nutritional information
  document.getElementById('order-details').innerHTML = orderDetails;
  document.getElementById('nutritional-info').innerHTML = nutritionalInfo;
});

function findFruitById(id) {
  // Find the fruit in the data based on the ID
  return fruitData.find(fruit => fruit.id === parseInt(id));
}

function findFruitNameById(id) {
  // Find the fruit name based on the ID
  const fruit = findFruitById(id);
  return fruit ? fruit.name : 'Unknown Fruit';
}
