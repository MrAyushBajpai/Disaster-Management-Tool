// Function to calculate the distance between two sets of latitude and longitude coordinates
function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Function to sort Community Awareness Programs by distance
function sortProgramsByDistance(userLat, userLon, programs) {
    programs.sort((program1, program2) => {
        const distance1 = calculateDistance(userLat, userLon, program1.latitude, program1.longitude);
        const distance2 = calculateDistance(userLat, userLon, program2.latitude, program2.longitude);
        return distance1 - distance2;
    });
}

// Example list of Community Awareness Programs with city and coordinates
const programs = [
    { city: 'New Delhi Earthquake Community Awareness Program', latitude: 28.6139, longitude: 77.2090, date: '15 September, 2023', time: '1PM' },
    { city: 'Lucknow Drought Community Awareness Program', latitude: 26.8467, longitude: 80.9462, date: '15 September, 2023', time: '1PM'},
    { city: 'Mumbai Flood Prevention Community Awareness Program', latitude: 19.0760, longitude: 72.8777, date: '15 September, 2023', time: '1PM'},
];

function appendSortedProgramsToUI(sortedPrograms) {
    const listGroup = document.querySelector('.list-group');

    sortedPrograms.forEach((program) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item');

        // Create a text node for the city, date, and time information
        const cityText = document.createTextNode(program.city);
        const dateText = document.createTextNode(`Date: ${program.date}`);
        const timeText = document.createTextNode(`Time: ${program.time}`);

        // Create line break elements
        const lineBreak1 = document.createElement('br');
        const lineBreak2 = document.createElement('br');

        // Create a link to Google Maps with the coordinates
        const googleMapsLink = document.createElement('a');
        googleMapsLink.href = `https://www.google.com/maps?q=${program.latitude},${program.longitude}`;
        googleMapsLink.target = '_blank'; // Open in a new tab
        googleMapsLink.textContent = 'View on Google Maps';

        // Append the elements to the list item
        listItem.appendChild(cityText);
        listItem.appendChild(lineBreak1);
        listItem.appendChild(dateText);
        listItem.appendChild(lineBreak2);
        listItem.appendChild(timeText);
        listItem.appendChild(document.createElement('br')); // Create an extra line break
        listItem.appendChild(googleMapsLink); // Add the Google Maps link

        // Append the list item to the list group
        listGroup.appendChild(listItem);
    });
}


// Get user's location using Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
        const userLat = position.coords.latitude;
        const userLon = position.coords.longitude;

        // Sort programs by distance from the user's location
        sortProgramsByDistance(userLat, userLon, programs);

        // Append sorted programs to the list-group
        appendSortedProgramsToUI(programs);
    }, (error) => {
        console.error('Error getting user location:', error);
    });
} else {
    console.error('Geolocation is not supported by this browser.');
}
