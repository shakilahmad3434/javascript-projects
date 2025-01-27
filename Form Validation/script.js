// store a input reference
const mainHeading = document.querySelector(".main-heading");
const firstName = document.querySelector(".firstname");
const firstnameError = document.querySelector(".firstname-error");
const lastName = document.querySelector(".lastname");
const lastnameError = document.querySelector(".lastname-error");
const emailName = document.querySelector(".email");
const emailError = document.querySelector(".email-error");
const password = document.querySelector(".password");
const passwordError = document.querySelector(".password-error");
const confirmPassword = document.querySelector(".confirm-password");
const confirmPassError = document.querySelector(".confirmpassword-error");
const submitBtn = document.querySelector(".form");

const formValidation = (event) => {
  event.preventDefault();
   let state = 0;
  // first name validation
  const firstname = submitBtn.elements.firstname.value.trim();
  const firstnameRegex = /^[a-zA-Z\s-]{2,50}$/;
  if (firstname === "") {
    firstnameError.textContent = "First name is empty";
  } else if (!firstnameRegex.test(firstname)) {
    firstnameError.textContent = "First name must be 2-50 characters and contain only letters, spaces, or hyphens.";
  } else {
    // firstnameError.textContent = "First name is valid";
    state +=1;
  }

  // last name validation
  const lastname = submitBtn.elements.lastname.value.trim();
  const lastnameRegex = /^[a-zA-Z\s-]{2,50}$/;
  if (lastname === "") {
    lastnameError.textContent = "Last name is empty";
  } else if (!lastnameRegex.test(lastname)) {
    lastnameError.textContent = "First name must be 2-50 characters and contain only letters, spaces, or hyphens.";
  } else if (firstname === lastname) {
    lastnameError.textContent = "First and Last name is same!";
  } else {
    // lastnameError.textContent = "Last name is valid";
    state +=1;
  }

  // email validation
  const email = submitBtn.elements.email.value.trim();
  const emailRegex = /^[\w._%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  if (email === "") {
   emailError.textContent = "emai is empty";
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Please enter a valid email address (e.g., example@domain.com).";
  } else {
    // emailError.textContent = "Email is Valid";
    state +=1;
  }

  // password validation

  const lowerCasePattern = /^(?=.*[a-z]).+$/; // At least one LOWERCASE character
  const upperCasePattern = /^(?=.*[A-Z]).+$/; // At least one UPPERCASE character
  const numberPattern = /^(?=.*[\d]).+$/; // At least one NUMBER:
  const specialCharacterPattern =
    /([-+=_!@#$%^&*.,;:'\"<>/?`~\[\]\(\)\{\}\\\|\s])/; // At least one SPECIAL character
  const characterCountPattern = /^.{8,}/; // At least 8 characters in the screen
  const password = submitBtn.elements.password.value.trim();
  if (password === "") {
    passwordError.textContent = "Password is empty";
  } else if (!lowerCasePattern.test(password)) {
    passwordError.textContent = "Enter at least one lowercase";
  } else if (!upperCasePattern.test(password)) {
    passwordError.textContent = "Enter at least one Uppercase";
  } else if (!numberPattern.test(password)) {
    passwordError.textContent = "Enter at least one Number";
  } else if (!specialCharacterPattern.test(password)) {
    passwordError.textContent = "Enter at least one characters";
  } else if (!characterCountPattern.test(password)) {
    passwordError.textContent = "Enter at least 8 character";
  } else {
    // passwordError.textContent = "Password is valid";
    state +=1;
  }
  // confirm password
  const confirmPassword = submitBtn.elements.confirmpassword.value.trim();
  if (confirmPassword === "") {
    confirmPassError.textContent = "Confirm Password is Missing";
  } else if (confirmPassword !== password) {
    confirmPassError.textContent = "Passwords do not match.";
  } else {
    // confirmPassError.textContent = "Password is valid";
    state +=1;
  }

  if(state === 5){
    document.querySelector(".thank-you").textContent = "Thank You";
    setTimeout(() => {
      document.querySelector(".thank-you").textContent = "";
    },2000);
  }


};

submitBtn.addEventListener("submit", formValidation);
// Handle input event for updating the last typed character
const handleInput = (e) => {
  if (e.target.tagName === "INPUT") {
    const lastChar = e.target.value.slice(-1); // Get the last character typed
    const displayElement = document.querySelector(".backword");

    // Display the last character
    if(e.target.getAttribute("type") === "password"){
      displayElement.textContent = "*";
    }else{

      displayElement.textContent = lastChar;
    }
  }
};

// Handle click event for toggling password visibility
const handleClick = (e) => {
  if (e.target.tagName === "I") {
    const inputField = e.target.previousElementSibling; // The sibling input field
    if (inputField.getAttribute("type") === "password") {
      inputField.setAttribute("type", "text");
    } else {
      inputField.setAttribute("type", "password");
    }

    // Toggle lock/unlock icon
    if (e.target.className === "fa-solid fa-lock") {
      e.target.classList.add("fa-unlock");
    } else {
      e.target.classList.remove("fa-unlock");
      e.target.classList.add("fa-lock");
    }
  }

  // Check if clicked element is an input
  if (e.target.tagName === "INPUT") {    
    mainHeading.textContent = e.target.placeholder;
  } else {
    mainHeading.textContent = "Sign Up";
  }
};

// Attach event listeners
document.body.addEventListener("input", handleInput);
document.body.addEventListener("click", handleClick);
