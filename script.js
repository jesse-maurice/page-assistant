const actionButton = document.getElementById("action-button");
const assistant = document.getElementById("assistant");
const hoverIcon = document.getElementById("hover-icon");

actionButton.addEventListener("click", () => {
  // Move the assistant to the button
  assistant.style.animation = "moveToButton 2s ease-in-out forwards";

  // Explain what the button does
  assistant.innerHTML =
    '<div class="assistant-text">This button performs a special action.</div>';
});

hoverIcon.addEventListener("click", () => {
  // Provide explanations for certain elements on hover
  alert("Hover over elements to learn more!");
});
