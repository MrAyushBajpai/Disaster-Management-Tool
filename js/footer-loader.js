// Function to load the footer from footer.html using JavaScript
function loadFooter() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'footer.html', true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById('footer-container').innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

loadFooter();
