// login Form
let loginForm = document.getElementById("login_form");
let email = document.getElementById("user");
let pass = document.getElementById("pass");
let toggle_pass_icon = document.getElementById("toggle_pass_icon");
let alert = document.getElementById("alert");
let submitBtn = document.getElementById("submit_btn");

// Register Form
let registerForm = document.getElementById("register_form");
let mail = document.getElementById("mail");
let password = document.getElementById("password");
let rePassword = document.getElementById("re_password");
let toggle_reg_pass_icon = document.getElementById("toggle_reg_pass_icon");
let regAlert = document.getElementById("reg_alert");
let createBtn = document.getElementById("create_btn");

// Both
let haveAccContainer = document.getElementById("have_acc_container");
let haveAccP = document.getElementById("have_acc_p");

// Login Form Methods
function loginFormValidation(ele) {
  let completed = true;
  let inputs = ele.parentNode.parentNode.querySelectorAll("input");
  inputs.forEach((obj) => {
    if (obj.value === "") {
      completed = false;
      submitBtn.setAttribute("disabled", "disabled");
    }
  });
  if (completed == true) {
    submitBtn.removeAttribute("disabled");
  }
}

function handleResetingPassword(event) {
  event.preventDefault();
  loginForm.innerHTML = "<center>انت لحقت تنساه؟</center>";
  haveAccContainer.classList.add("hide");
}

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validateEmail(email.value)) {
    alert.innerHTML = "Invalid Email!";
    email.style = "border-color:red;";
  }
  loginForm.innerHTML =
    "<center>المعلومات دى مش مزبوطه يا صاحبى بس انا هسيبك تدخل جدعنه منى يعنى</center>";
  haveAccContainer.classList.add("hide");
});

// Register Form Methods
function registerFormValidation(ele) {
  let completed = true;
  let inputs = ele.parentNode.parentNode.querySelectorAll("input");
  inputs.forEach((obj) => {
    if (obj.value === "") {
      completed = false;
      createBtn.setAttribute("disabled", "disabled");
    }
  });
  if (completed == true) {
    if (passwordMatching()) createBtn.removeAttribute("disabled");
    else createBtn.setAttribute("disabled", "disabled");
  }
}

createBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (!validateEmail(mail.value)) {
    regAlert.innerHTML = "Invalid Email!";
    mail.style = "border-color:red;";
  } else {
    registerForm.innerHTML = "<center>❤️اعتبرو اتعمل يخويا</center>";
    haveAccContainer.classList.add("hide");
  }
});

function passwordMatching() {
  if (password.value != rePassword.value && rePassword.value !== "") {
    rePassword.style.borderColor = "red";
    return false;
  } else {
    rePassword.style.borderColor = "var(--main-color)";
    return true;
  }
}

// General Methods
document.addEventListener("input", function (event) {
  const input = event.target;
  const parentDiv = input.closest(".form-content div");
  if (parentDiv) {
    parentDiv.classList.toggle("has-content", input.value.trim() !== "");
  }
});

function whichPage(btn) {
  loginForm.classList.toggle("hide");
  registerForm.classList.toggle("hide");
  if (btn.innerHTML === "Sign Up") {
    haveAccP.innerHTML = "Already Have An Account ?";
    btn.innerHTML = "Sign In";
  } else if (btn.innerHTML === "Sign In") {
    haveAccP.innerHTML = "Don't Have An Account ?";
    btn.innerHTML = "Sign Up";
  }
}

function showPassword(ele) {
  let input = ele.parentNode.querySelector("input");
  ele.classList.toggle("fa-lock");
  ele.classList.toggle("fa-eye-slash");
  input.type = input.type === "password" ? "text" : "password";
}

function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function isEmpty(ele) {
  if (ele.value === "") {
    ele.style = "border-color: red;";
  }
}

function clearAlert() {
  alert.innerHTML = "";
  regAlert.innerHTML = "";
}

function resetBorder(ele) {
  ele.style = "border-color: var(--main-color);";
}