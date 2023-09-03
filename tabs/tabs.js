// Function to reset the inactivity timer
function resetInactivityTimer() {
    clearTimeout(inactivityTimeout);
    inactivityTimeout = setTimeout(() => {
        location.href = 'index.html';
    }, 30000); // 30 seconds
}

document.addEventListener("DOMContentLoaded", function () {
    const viewSongsLink = document.getElementById("view-songs-link");
    const albumContainer = document.getElementById("album-container");
    const closeButton = document.getElementById("close-button");

    viewSongsLink.addEventListener("click", function (event) {
        event.preventDefault();
        albumContainer.style.opacity = "1";
        albumContainer.style.pointerEvents = "auto";
    });

    closeButton.addEventListener("click", function () {
        albumContainer.style.opacity = "0";
        albumContainer.style.pointerEvents = "none";
    });

    const clickable = document.getElementById('clickable');
    const container = document.getElementById('container');
    const exitButton = document.getElementById('exitButton');

    clickable.addEventListener('click', () => {
        console.log('Download button clicked');
        // Handle the download logic here
    });

    const moreIcon = document.getElementById("more-icon");
    const threeContainer = document.getElementById("three");

    moreIcon.addEventListener("click", function () {
        threeContainer.style.display = threeContainer.style.display === "none" ? "block" : "none";
    });

    // Function to toggle the visibility of a container
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
    

    const sideMenu = document.querySelector('aside');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');

    menuBtn.addEventListener('click', () => {
        sideMenu.style.display = 'block';
        resetInactivityTimer(); // Reset the timer when the menu is clicked
    });

    clickable.addEventListener('click', () => {
        console.log('Download button clicked');
        // Handle the download logic here
    });

    closeBtn.addEventListener('click', () => {
        sideMenu.style.display = 'none';
        resetInactivityTimer(); // Reset the timer when the close button is clicked
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

    // Fetch data from a URL (e.g., JSON data)
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            // Process the fetched data here
        });
});

// Other code and event listeners can be added here as needed
