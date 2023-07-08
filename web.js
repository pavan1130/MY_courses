// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  const searchInput = document.querySelector(".search input");
  const searchValue = searchInput.value;

  // Perform search logic here...
  console.log("Search value:", searchValue);

  // Clear the search input
  searchInput.value = "";
}

// Add event listeners after the DOM has loaded
document.addEventListener("DOMContentLoaded", function () {
  const searchForm = document.querySelector(".search");
  searchForm.addEventListener("submit", handleFormSubmit);
});
