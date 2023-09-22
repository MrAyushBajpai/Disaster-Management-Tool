// JavaScript code to handle "View More" button click
const viewMoreButton = document.getElementById("view-more-button");
const listGroup = document.querySelector(".list-group");

let displayedItems = 0; // Number of items initially displayed
const allDisasters = [
    {
        title: "Tropical Cyclone",
        description: "Category 4 cyclone strikes coastal region.",
        date: "September 1, 2023",
        link: "disaster_detail.html"
    },
    {
        title: "Earthquake",
        description: "Magnitude 6.2 earthquake hits nearby area.",
        date: "August 25, 2023",
        link: "disaster_detail.html"
    },
    {
        title: "Flood",
        description: "Heavy rainfall leads to severe flooding in multiple cities.",
        date: "July 10, 2023",
        link: "disaster_detail.html"
    },
    {
        title: "Wildfire",
        description: "Large wildfire spreads in forested areas, causing evacuations.",
        date: "June 5, 2023",
        link: "disaster_detail.html"
    },
    // Add more disaster items as needed
];

// Function to display additional disaster items
function displayMoreItems() {
    const itemsToDisplay = allDisasters.slice(displayedItems, displayedItems + 2); // Display 2 more items

    itemsToDisplay.forEach((disaster) => {
        const listItem = document.createElement("li");
        listItem.classList.add("list-group-item");
        listItem.innerHTML = `
            <h5 class="mb-1">${disaster.title}</h5>
            <p class="mb-1">${disaster.description}</p>
            <small class="text-muted">Date: ${disaster.date}</small>
            <a href="${disaster.link}">Details</a>`
        ;

        listGroup.appendChild(listItem);
    });

    displayedItems += 2;

    // Hide the button when all items are displayed
    if (displayedItems >= allDisasters.length) {
        viewMoreButton.style.display = "none";
    }
}

viewMoreButton.addEventListener("click", displayMoreItems);

displayMoreItems();


// Initially, check if there are more items to display or hide the button
if (displayedItems >= allDisasters.length) {
    viewMoreButton.style.display = "none";
}
