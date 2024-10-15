function toggleSlider() {
  var slider = document.getElementById("slider");

  if (slider.style.width === "0px" || slider.style.width === "") {
      slider.style.width = "500px"; // Open slider
  } else {
      slider.style.width = "0px"; // Close slider
  }
}


function openChat(contactId) {
  // Hide all chatboxes
  const chatboxes = document.querySelectorAll('.chatbox');
  chatboxes.forEach(chatbox => {
      chatbox.style.display = 'none';
  });

  // Display the selected chatbox
  document.getElementById(contactId).style.display = 'flex';
}
