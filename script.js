let menuBtn = document.getElementById("menu-btn");
let navLinks = document.getElementById("nav-links");
let menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  const isOpen = menuBtn.classList.contains("open");
  menuBtnIco.serAttribute(
    "class",
    isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars"
  );
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

function faq(ele){
  var x = ele.parentElement.nextElementSibling.style.cssText;
  if(x == 'max-height: 500px;'){
    ele.style.cssText = 'transform: rotate(0deg)';
    ele.parentElement.nextElementSibling.style.cssText = 'transition: 0.4s; max-height: 0px;';
  }
  else{
    ele.style.cssText = 'transform: rotate(45deg)';
    ele.parentElement.nextElementSibling.style.cssText = 'max-height: 500px;';
  }
}

const form = document.querySelector('form');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmationPassword');

confirmPassword.addEventListener('input', () => {
  if (confirmPassword.value !== password.value) {
      confirmPassword.style.borderColor = 'red';
  } else {
      confirmPassword.style.borderColor = 'green';
  }
});

