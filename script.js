document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading screen initially
    document.getElementById("loading-screen").style.display = "none";

    // Function to hide the loading screen
    function hideLoadingScreen() {
        document.getElementById("loading-screen").style.display = "none";
    }

    // Add an event listener to all links
    const links = document.querySelectorAll("a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            // Prevent the default link behavior
            e.preventDefault();

            // Show the loading screen
            document.getElementById("loading-screen").style.display = "block";

            // Load the linked page
            const newPage = window.open(link.href, '_blank');

            // Add a load event listener to the new page
            newPage.addEventListener("load", function() {
                // Hide the loading screen after the new page has loaded
                hideLoadingScreen();
                newPage.focus(); // Bring focus to the newly loaded page
            });

            // Set a timeout to hide the loading screen after 3 seconds (even if the page doesn't trigger the load event)
            setTimeout(hideLoadingScreen, 3000); // 3 seconds
        });
    });
});