function validateTitle() {
    const titleInput = document.getElementById("title");
    const titleValue = titleInput.value.trim();

    const regex = /^[A-Za-z\s\-]{7,}$/;
    
    if (titleValue === "" || regex.test(titleValue)) {
      // Valid input
      titleInput.setCustomValidity("");
    } else {
      // Invalid input
      titleInput.setCustomValidity("Please enter a valid title with a minimum of seven alpha characters, hyphens, and spaces.");
    }
  }