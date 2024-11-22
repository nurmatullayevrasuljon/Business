function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

//  
// Initialize the map
var map = L.map('map').setView([51.5034, -0.1276], 10); // Coordinates for London

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Add a custom marker at 10 Downing Street
var marker = L.marker([51.5034, -0.1276]).addTo(map);

// Add a popup to the marker
marker.bindPopup(
    `
<div class="custom-popup">
    <strong>Business</strong><br>
    10 Downing Street<br>
    London<br>
    SW1A 2AA<br>
    United Kingdom
</div>`
).openPopup();


// nubmeb //

// nubmeb //