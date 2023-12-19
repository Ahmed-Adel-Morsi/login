let showPassIcon = document.getElementById('show_pass_icon');
let passInput = document.getElementById('pass');
document.addEventListener('input', function (event) {
  const input = event.target;
  const parentDiv = input.closest('.form-content div');
  if (parentDiv) {
    parentDiv.classList.toggle('has-content', input.value.trim() !== '');
  }
});
function showPassword() {
  showPassIcon.classList.toggle('fa-lock');
  showPassIcon.classList.toggle('fa-eye-slash');
  passInput.type = passInput.type === 'password' ? 'text' : 'password';
}

let loginForm = document.getElementById('login_form');
let registerForm = document.getElementById('register_form');
let submitBtn = document.getElementById('submit_btn');
let container = document.getElementById('container');
let haveAccP = document.getElementById('have_acc_p');

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (submitBtn.innerHTML =='Sign In') {
    loginForm.innerHTML = "<center>😎المعلومات دى مش مزبوطه يا صاحبى بس انا هسيبك تدخل جدعنه منى يعنى</center>"
  } else if (submitBtn.innerHTML =='Create') {
    loginForm.innerHTML = "<center>❤️اعتبرو اتعمل يخويا</center>"
  }
});
// window.onload = function () {
//   container.innerHTML = container.appendChild(registerForm);
// }
function whichPage(btn) {
  loginForm.classList.toggle('hide');
  registerForm.classList.toggle('hide');
  if (btn.innerHTML === 'Sign Up') {
    haveAccP.innerHTML = "Already Have An Account ?";
    btn.innerHTML = 'Sign In';
  }
  else if (btn.innerHTML === 'Sign In') {
    haveAccP.innerHTML = "Don't Have An Account ?";
    btn.innerHTML = 'Sign Up';
  }
}