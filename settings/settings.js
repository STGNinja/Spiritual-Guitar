 // JavaScript code for cookie consent
 const cookieBanner = document.getElementById('cookie-consent-banner');
 const acceptButton = document.getElementById('accept-cookies');
 const acceptStatus = document.getElementById('accept-status');
 const cookieSettings = document.getElementById('cookie-settings');

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

 // Check if the user has already given consent (optional)
 if (document.cookie.includes('cookie_consent=true')) {
   cookieBanner.style.display = 'none';
   cookieSettings.style.display = 'block';
 }