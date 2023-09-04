// Function to load the navbar from navbar.html using JavaScript
function loadNavbar() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'navbar.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('navbar-container').innerHTML = xhr.responseText;
            }
    };
    xhr.send();
}

loadNavbar();
