const sideMenu = document.querySelector('aside');
const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');

const darkMode = document.querySelector('.dark-mode');
let inactivityTimeout;

// Function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        location.href = 'index.html';
    }, 500000); // 30 seconds
}

menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
    resetInactivityTimer(); // Reset the timer when the menu is clicked
});

const dashElement = document.querySelector('.dash');

dashElement.addEventListener('animationend', () => {
    dashElement.style.animation = 'none'; // Remove animation
});


closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
    resetInactivityTimer(); // Reset the timer when the close button is clicked
});

function toggleContainer() {
    var container = document.getElementById("white-container");
    if (container.style.display === "" || container.style.display === "none") {
        container.style.display = "block";
    } else {
        container.style.display = "none";
    }
}

const downloadButtons = document.querySelectorAll(".down_text a");

downloadButtons.forEach(button => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        toggleContainer(); // Toggle the container visibility when a download link is clicked
    });
});




// Assuming 'Orders' is an array of orders
Orders.forEach(order => {
    const tr = document.createElement('tr');
    const trContent = `
        <td>${order.productName}</td>
        <td>${order.productNumber}</td>
        <td>${order.paymentStatus}</td>
        <td class="${order.status === 'Declined' ? 'danger' : order.status === 'Pending' ? 'warning' : 'primary'}">${order.status}</td>
        <td class="primary">Details</td>
    `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
});

// Set up initial inactivity timer
resetInactivityTimer();


fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())
.then(data => {})


document.getElementById("view-songs-link").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the link from navigating
    var albumContainer = document.getElementById("album-container");
    if (albumContainer.style.display === "none") {
        albumContainer.style.display = "block";
    } else {
        albumContainer.style.display = "none";
    }
});
