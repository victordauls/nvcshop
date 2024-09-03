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
  lastnameerror = document.querySelector(".lastname-error"),
  password_error = document.querySelector(".password-error"),
  re_type_password_error = document.querySelector(".re-type-password-error"),
  sign_in = document.querySelector(".sign-ins"),
  parent_error = document.querySelector(".parent_error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    firstname.value !== "" &&
    lastname.value !== "" &&
    password.value !== "" &&
    retypepassword.value !== ""
  ) {
    if (password.value !== retypepassword.value) {
      let user;
      if (localStorage.getItem("login") === null) {
        user = [];
      } else {
        user = JSON.parse(localStorage.getItem("login"));
      }

      user.forEach((info) => {
        if (info.fullName === `${firstname.value} ${lastname.value}`) {
          parent_error.style.visibility = "visible";
          clearerror();
        }
      });
      re_type_password_error.style.visibility = "visible";
      re_type_password_error.textContent = "password dose not match";
      clearerror();
    } else {
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
      if (confirm("registration successful proceed to login")) {
        window.document.location.href = "/index.html";
      }
    }
  } else if (
    firstname.value === "" &&
    lastname.value === "" &&
    password.value === "" &&
    retypepassword.value === ""
  ) {
    parent_error.style.visibility = "visible";
    parent_error.textContent = "fields cannot be empty";
    clearerror();
  } else if (firstname.value === "") {
    errormessage.style.visibility = "visible";
    clearerror();
  } else if (lastname.value === "") {
    lastnameerror.style.visibility = "visible";
    clearerror();
  } else if (password.value === "") {
    password_error.style.visibility = "visible";
    clearerror();
  } else if (retypepassword.value === "") {
    re_type_password_error.style.visibility = "visible";
    clearerror();
  }
});

sign_in.addEventListener("click", () => {
  window.document.location.href = "/index.html";
});

function clearerror() {
  setTimeout(() => {
    errormessage.style.visibility = "hidden";
    password_error.style.visibility = "hidden";
    lastnameerror.style.visibility = "hidden";
    re_type_password_error.style.visibility = "hidden";
    parent_error.style.visibility = "hidden";
  }, 3000);
}
