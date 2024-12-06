function sendMessage() {
  const messageInput = document.getElementById("messageInput");
  const messageText = messageInput.value.trim();

  if (messageText !== "") {
    // Display the message in the chat box before sending
    // Open Facebook Messenger link with the message to your account
    const encodedMessage = encodeURIComponent(messageText);

    // Facebook Messenger link to send a message to your profile
    const fbMessengerLink = `https://m.me/100086301079202?text=${encodedMessage}`;

    // Open Messenger in a new tab (or app)
    window.open(fbMessengerLink, "_blank");

    // Clear the input field
    messageInput.value = "";
  }
}
