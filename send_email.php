<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  $to = "harshitsingla1761@gmail.com"; // Replace with your email address
  $subject = "New form submission";
  $body = "Name: $name\nEmail: $email\nMessage: $message";

  if (mail($to, $subject, $body)) {
    echo "Email sent successfully!";
  } else {
    echo "Failed to send email.";
  }
}
?>
