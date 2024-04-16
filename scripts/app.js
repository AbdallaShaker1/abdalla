// Selecting elements from the DOM

const burgerIcon = document.querySelector("#burger-icon");
const header = document.querySelector("#header");
const navContainer = document.querySelector("#nav-container");
const unOrderedList = document.querySelector("#un-ordered-list");
const laptopImage = document.querySelector("#image-side");
const changeThePageColor = document.querySelector("#change-the-page-color");
const moonIcon = document.querySelector("#moon-icon");
const sunIcon = document.querySelector("#sun-icon");
const form = document.querySelector("#form");
const userName = document.querySelector("#name");
const userEmail = document.querySelector("#email");
const phoneNumber = document.querySelector("#phone");
const message = document.querySelector("#message");
const success = document.querySelector("#success");
const failure = document.querySelector("#failure");
const root = document.documentElement;
const stylesheet = document.styleSheets[0];
let COUNTER = 1;

// Toggling classes on click of the burger icon to show/hide the navigation menu
burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  navContainer.classList.toggle("active");
  header.classList.toggle("opened");
  setTimeout(() => {
    unOrderedList.classList.toggle("gap-3");
  }, 500);
});

// Changing the page colors on click of the color change button
changeThePageColor.addEventListener("click", () => {
  if (COUNTER == 1) {
    // Set the color variables to dark theme colors
    // You can change the color values here
    root.style.setProperty("--black-background-color", "#fff2d8");
    root.style.setProperty("--white-color", "#1f211f");
    root.style.setProperty("--black-color", "#f9f9f9");
    root.style.setProperty("--paragraph-white-color", "#5c5b5a");
    root.style.setProperty("--paragraph-black-color", "#cccccc");
    root.style.setProperty(
      "--sun-color",
      "linear-gradient(40deg, #ff0080, #ff8c00 70%)"
    );
    COUNTER = 0;
  } else if (COUNTER == 0) {
    // Set the color variables to light theme colors
    // You can change the color values here
    root.style.setProperty("--black-background-color", "#1f211f");
    root.style.setProperty("--white-color", "#f9f9f9");
    root.style.setProperty("--black-color", "#1f211f");
    root.style.setProperty("--paragraph-white-color", "#cccccc");
    root.style.setProperty("--paragraph-black-color", "#5c5b5a");
    root.style.setProperty(
      "--moon-color",
      "linear-gradient(40deg, #8983f7, #a3dafb 70%)"
    );
    COUNTER = 1;
  }
});

// Changing the laptop image on mouse enter/leave of the color change button
changeThePageColor.addEventListener("mouseenter", () => {
  laptopImage.classList.remove("display-none");
  laptopImage.classList.add("going-in");
  setTimeout(() => {
    laptopImage.classList.remove("going-in");
  }, 1000);
});

changeThePageColor.addEventListener("mouseleave", () => {
  laptopImage.classList.add("going-out");
  setTimeout(() => {
    laptopImage.classList.add("display-none");
    laptopImage.classList.remove("going-out");
  }, 900);
});

// Function to submit the form
function submitting() {
  // Construct the email body
  const bodyMessage = `Name: ${userName.value} <br /> Email: ${email.value} <br /> Phone Number: ${phoneNumber.value} <br /> message: ${message.value} <br />`;
  // Send the email using Email.send() (You need to include the Email.js library for this)
  Email.send({
    SecureToken: "d0f845ac-a526-4567-b58c-67ec37ca5811",
    To: "abdallashaker141@gmail.com",
    From: "abdallashaker1441@gmail.com",
    Subject: "Portfolio message",
    Body: bodyMessage,
  }).then((message) => {
    // Display success or failure message based on the result
    if (message === "OK") {
      success.classList.remove("hidden");
      setTimeout(() => {
        success.classList.add("hidden");
      }, 1000);
    } else {
      failure.classList.remove("hidden");
      failure.innerText = `Error: ${message}`;
      setTimeout(() => {
        failure.classList.add("hidden");
      }, 1000);
    }
  });
}

// Function to validate form inputs
function checkInputs() {
  const items = document.querySelectorAll(".item");
  // Loop through each input field and validate
  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }

    items[1].addEventListener("keyup", () => {
      checkEmail();
    });

    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      } else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    });
  }
}

// Function to validate email format
function checkEmail() {
  // Check if the email format is valid using a regex pattern
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const errorTxtEmail = document.querySelector(".error-message.email");
  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");
    if (email.value != "") {
      // Display error message if the format is incorrect
      errorTxtEmail.innerText = "Enter a valid email address";
    } else {
      errorTxtEmail.innerText = "Email Address can't be blank";
    }
  } else {
    email.classList.remove("error");
    email.parentElement.classList.remove("error");
  }
}

// Form submission event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
  // Validate form inputs
  // If all inputs are valid, submit the form
  if (
    !userName.classList.contains("error") &&
    !userEmail.classList.contains("error") &&
    !phoneNumber.classList.contains("error") &&
    !message.classList.contains("error")
  ) {
    // Reset the form and display success or failure message
    submitting();
    form.reset();
    return false;
  }
});
