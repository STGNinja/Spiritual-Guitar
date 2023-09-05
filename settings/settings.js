const cookieBanner = document.getElementById('cookie-consent-banner');
const acceptButton = document.getElementById('accept-cookies');
const acceptStatus = document.getElementById('accept-status');
const cookieSettings = document.getElementById('cookie-settings');
const learnMoreLink = document.getElementById('learn-more-link');

acceptButton.addEventListener('click', () => {
  // Show the "Pending" message
  acceptStatus.style.display = 'inline';

  // Simulate an asynchronous operation (e.g., setting cookies)
  setTimeout(() => {
    // Set a cookie to record user consent
    document.cookie = 'cookie_consent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=/';

    // Hide the "Pending" message
    acceptStatus.style.display = 'none';

    // Show the cookie settings page (optional)
    cookieSettings.style.display = 'block';
  }, 2000); // Simulated delay for 2 seconds (adjust as needed)
});

// Toggle visibility of cookie settings when "Learn more" is clicked
learnMoreLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  cookieSettings.style.display = 'block';
});

// Check if the user has already given consent (optional)
if (document.cookie.includes('cookie_consent=true')) {
  cookieBanner.style.display = 'none';
  cookieSettings.style.display = 'block';
}

if ('serviceWorker' in navigator && 'PushManager' in window) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function(registration) {
      console.log('Service Worker registered with scope:', registration.scope);
    })
    .catch(function(error) {
      console.error('Service Worker registration failed:', error);
    });
}

