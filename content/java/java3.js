/** @format */

let firstname = document.querySelector("#first-name"),
  lastname = document.querySelector("#last-name"),
  password = document.querySelector("#password"),
  retypepassword = document.querySelector("#re-type-password"),
  form = document.querySelector("form"),
  firstnamediv = document.querySelector(".first-name"),
  lastnamediv = document.querySelector(".last-name"),
  passworddiv = document.querySelector(".password"),
  retypepassworddiv = document.querySelector(".re-type-password"),
  submit = document.querySelector("button"),
  errormessage = document.querySelector(".error"),
  sign_in = document.querySelector(".sign-ins");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let body = {
    fullName: "",
    c_passwsord: "",
  };

  body.fullName = `${firstname.value} ${lastname.value}`;
  body.c_passwsord = retypepassword.value;

  let userInfo;

  if (localStorage.getItem("login") === null) {
    userInfo = [];
  } else {
    userInfo = JSON.parse(localStorage.getItem("login"));
  }
  userInfo.push(body);
  localStorage.setItem("login", JSON.stringify(userInfo));
});
sign_in.addEventListener("click", () => {
  window.document.location.href = "/index.html";
});
