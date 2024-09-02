/** @format */

let loginbtn = document.querySelector(".login"),
  usernameinput = document.querySelector(".input1"),
  passwordinput = document.querySelector(".input2"),
  error = document.querySelector(".instruction"),
  signup = document.querySelector(".sign-up"),
  body = document.querySelector("body"),
  form = document.querySelector("form"),
  show = document.querySelector(".show");

loginbtn.addEventListener("click", login);

info = JSON.parse(localStorage.getItem("login"));

function login(e) {
  e.preventDefault();
  let login;
  if (localStorage.getItem("login") === null) {
    login = [];
  } else {
    login = JSON.parse(localStorage.getItem("login"));
  }

  login.forEach((info) => {
    if (
      info.fullName === usernameinput.value &&
      info.c_passwsord === passwordinput.value
    ) {
      error.textContent = "login successful";
      error.style.visibility = "visible";
      error.style.color = "green";
      removeerror();
      window.location.href = "/content/index2.html";
    } else {
      error.textContent = "user not found";
      error.style.visibility = "visible";
      removeerror();
    }
    if (
      (usernameinput.value !== info.fullName &&
        passwordinput.value === info.c_passwsord) ||
      (passwordinput.value !== info.c_passwsord &&
        usernameinput.value === info.fullName)
    ) {
      error.textContent = "username or password is not correct";
      error.style.visibility = "visible";
      removeerror();
    }
  });

  if (usernameinput.value !== "" && passwordinput.value !== "") {
    if (
      usernameinput.value === info.fullName &&
      passwordinput.value === passwordinput.value
    ) {
      window.document.location.href = "/content/index2.html";
    }
  } else if (usernameinput.value === "" && passwordinput.value === "") {
    error.textContent = "fields cannot be empty";
    error.style.visibility = "visible";
  } else if (usernameinput.value === "") {
    error.textContent = "username cannot be empty";
    error.style.visibility = "visible";
    removeerror();
  } else if (passwordinput.value === "") {
    error.textContent = "password cannot be empty";
    error.style.visibility = "visible";
    removeerror();
  }
}

show.addEventListener("click", (e) => {
  e.preventDefault();
  if (passwordinput.type === "password") {
    show.textContent = "hide";
    passwordinput.type = "text";
  } else if (passwordinput.type === "text") {
    passwordinput.type = "password";
    show.textContent = "show";
  }
});

function removeerror() {
  setTimeout(() => {
    error.style.visibility = "hidden";
  }, 3000);
}

// document.querySelector(".test").addEventListener("click", () => {
//   // window.alert("hello wolrd");
// confirm("are you sure");
// if (confirm("proceed")) {
//   console.log("ok to go now");
// } else {
//   console.log("not ready yet");
// }
// let name = prompt("input your name");
// console.log(name);
// let b = prompt("the square root is");
// let a = Math.sqrt(b);
// if (b === null) {
//   console.log("it is a null");
// }
// console.log(b);
// window.navigation.reload();
// });

// window.document.location.href = "facebook.com";
// console.log(window);

// document.querySelector(".test").addEventListener("click", runevent);

// let data = [
//   {
//     tittle : "shoe",
//     description : "this is a "
//   }
// ]

// function runevent(e){
// e.preventDefault()
// }

signup.addEventListener("click", () => {
  window.document.location.href = "content/index3.html";
});
