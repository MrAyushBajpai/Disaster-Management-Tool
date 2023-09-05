const messages = [
    "Stay prepared for any disaster.",
    "Your safety is our top priority.",
    "Join us in disaster management efforts.",
    "Welcome to Disaster Awareness Portal"
];

function changeJumbotronText() {
    const changingText = document.getElementById("changing-heading");
    let currentIndex = 0;

    // Set an interval to update the text every 5 seconds (5000 milliseconds)
    setInterval(() => {
        changingText.textContent = messages[currentIndex];
        currentIndex = (currentIndex + 1) % messages.length;
    }, 5000); // Change text every 5 seconds
}

// Call the function to start text cycling
changeJumbotronText();
