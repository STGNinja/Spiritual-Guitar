<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve the review from the form
    $review = $_POST["review"];

    // Email settings
    $to = "spiritualguitar523@gmail.com";
    $subject = "New Review Submission";
    $message = "Review: " . $review;

    // Send the email
    $headers = "From: spiritualguitar523@gmail.com"; // Replace with your email address
    mail($to, $subject, $message, $headers);

    // Redirect to thank_you.html
    header("Location: thank_you.html");
    exit();
}
?>
