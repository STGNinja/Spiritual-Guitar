

<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $review = $_POST["review"];
    
    // Your email address
    $to = "spiritualguitar523@gmail.com";
    
    // Email subject
    $subject = "New Review Submission";
    
    // Email message
    $message = "Review:\n\n" . $review;
    
    // Additional headers
    $headers = "From: webmaster@example.com"; // You can set this to a valid email address
    
    // Send the email
    if (mail($to, $subject, $message, $headers)) {
        // Redirect to a thank you page after successful submission
        header("Location: thank_you.html");
        exit;
    } else {
        // Handle email sending failure (optional)
        echo "Failed to send the email. Please try again later.";
    }
}
?>
