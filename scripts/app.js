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
let COUNTER = 0;
// adding an active class to the burger icon to view all the header links
burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
  navContainer.classList.toggle("active");
  header.classList.toggle("opened");
  setTimeout(() => {
    unOrderedList.classList.toggle("gap-3");
  }, 500);
});

changeThePageColor.addEventListener("click", () => {
  if (COUNTER == 0) {
    root.style.setProperty("--white-background-color", "#fff2d8");
    root.style.setProperty("--black-color", "#1f211f");
    root.style.setProperty("--white-color", "#f9f9f9");
    root.style.setProperty("--paragraph-black-color", "#5c5b5a");
    root.style.setProperty("--paragraph-white-color", "#cccccc");
    root.style.setProperty(
      "--sun-color",
      "linear-gradient(40deg, #ff0080, #ff8c00 70%)"
    );
    COUNTER = 1;
  } else if (COUNTER == 1) {
    root.style.setProperty("--white-background-color", "#1f211f");
    root.style.setProperty("--black-color", "#f9f9f9");
    root.style.setProperty("--white-color", "#1f211f");
    root.style.setProperty("--paragraph-black-color", "#cccccc");
    root.style.setProperty("--paragraph-white-color", "#5c5b5a");
    root.style.setProperty(
      "--sun-color",
      "linear-gradient(40deg, #8983f7, #a3dafb 70%)"
    );
    COUNTER = 0;
  }
});

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

// SUBMITTING THE FORM

function submitting() {
  const bodyMessage = `Name: ${userName.value} <br /> Email: ${email.value} <br /> Phone Number: ${phoneNumber.value} <br /> message: ${message.value} <br />`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "abdallashaker1441@gmail.com",
    Password: "B497187E1B485980C227221E8C75610387F0",
    To: "abdallashaker141@gmail.com",
    From: "abdallashaker1441@gmail.com",
    Subject: "Portfolio message",
    Body: bodyMessage,
  }).then((message) => {
    if (message === "OK") {
      success.classList.remove("hidden");
      setTimeout(() => {
        success.classList.add("hidden");
      }, 1000);
    } else {
      failure.classList.remove("hidden");
      setTimeout(() => {
        failure.classList.add("hidden");
      }, 1000);
    }
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  submitting();
});
