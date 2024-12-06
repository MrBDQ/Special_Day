// Store the user's selections
let userChoices = {
  food: null,
  drink: null,
  movie: null,
};

// Function to show confirmation and move to the next step
function selectChoice(type, choice) {
  let confirmation = confirm(
    `You selected ${choice}. Are you sure this is what you'd like today?`
  );

  if (confirmation) {
    // Store the selected choice
    userChoices[type] = choice;

    // Display the selected choice in the result
    document.getElementById(`${type}Choice`).innerText = choice;

    // Hide the current step and show the next step
    if (type === "food") {
      document.getElementById("food").style.display = "none";
      document.getElementById("drink").style.display = "block";
    } else if (type === "drink") {
      document.getElementById("drink").style.display = "none";
      document.getElementById("movie").style.display = "block";
    } else if (type === "movie") {
      document.getElementById("movie").style.display = "none";
      document.getElementById("result").style.display = "block";
    }
  } else {
    // If No, allow the user to choose again (do nothing, stay on the same step)
    alert("Please choose again.");
  }
}

// Function to reset selections
function resetSelections() {
  // Reset the userChoices object and result text
  userChoices = { food: null, drink: null, movie: null };
  document.getElementById("foodChoice").innerText = "None";
  document.getElementById("drinkChoice").innerText = "None";
  document.getElementById("movieChoice").innerText = "None";

  // Show the food selection again
  document.getElementById("food").style.display = "block";
  document.getElementById("drink").style.display = "none";
  document.getElementById("movie").style.display = "none";
  document.getElementById("result").style.display = "none";
}
