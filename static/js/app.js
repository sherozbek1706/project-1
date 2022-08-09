const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

let name_up = document.querySelector("#nameup");
let username_up = document.querySelector("#usernameup");
let password_up = document.querySelector("#passwordup");
let confirmPassword_up = document.querySelector("#confirmPasswordup");
let signup_btn = document.querySelector("#signupbtn");

signup_btn.addEventListener("click" , (event) => {
  event.preventDefault();
  
  if(name_up.value === "" || username_up.value === ""){
    alert('Username yoki Ism kiritishda Xatolik bor!')
  }else if(password_up.value.length < 8){
    alert('Paroldagi Raqamlar Soni 8 tadan Ziyod Kiriting!')
  }else if(password_up.value !== confirmPassword_up.value){
    alert('Parol birbiriga tushmagan');
  }else if(password_up.value === confirmPassword_up.value){
    localStorage.setItem('username' , username_up.value.toString())
    localStorage.setItem('password' , password_up.value.toString())
    name_up.value = ""
    username_up.value = ""
    password_up.value = ""
    confirmPassword_up.value = ""
  }
});
