// JavaScript code to handle "View More" button click
const viewMoreButton = document.getElementById("view-more-button");
const listGroup = document.querySelector(".list-group");

let displayedItems = 0; // Number of items initially displayed
const allDisasters = [
    {
        title: "Earthquake: Epicenter Nepal",
        description: "Earthquake of Magnitude 6.2 occured in Nepal and its tremors affected area near New Delhi",
        date: "3 October, 2023",
        link: "disaster_detail.html"
    },
    {
        title: "Cyclone Biperjoy",
        description: "Category 4 cyclone strikes Gujrat coastal region.",
        date: "6 June, 2023",
        link: "disaster_detail.html"
    },
    {
        title: "Cyclone Asani",
        description: "Category 3 cyclone strikes Andhra Pradesh and Odisha coasts.",
        date: " May 10, 2023",
        link: "disaster_detail.html"
    },
    {
        title: "Uttarakhand Flash Floods",
        description: "Heavy rainfall triggers landslides and flash floods in Uttarakhand, causing widespread damage.",
        date: "July 18, 2022",
        link: "disaster_detail.html"
    },
    {
        title: "Northeast India Earthquake",
        description: "Magnitude 6.4 earthquake strikes Assam and neighboring states.",
        date: "March 28, 2022",
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
