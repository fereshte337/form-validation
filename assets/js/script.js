// console.log(document.querySelector(".titr").innerText);
// document.querySelector(".titr").innerText = "hiiii";

// console.log(document.querySelector("#email").value);
// document.querySelector("#email").value = "ssss";

// document.querySelector(".red").style.background = "red";

// console.log(document.querySelectorAll(".red"));
// console.log(document.querySelectorAll(".red")[0]);
// console.log(document.querySelectorAll(".red")[0].style.border);
// document.querySelectorAll(".red")[0].style.border = "7px solid blue";
// style.border = "7px solid blue";
//
// console.log(document.querySelector(".red"));
// document.querySelector(".red").style.border = "7px solid blue";

// document.querySelector(".error-f-name").innerText = "The filed is required!";

// document.querySelector.("#signup-btn").addEventListener("",function(event){

//   document.querySelector("#password").value
// }

// )

function signup(event) {
  event.preventdefault();
  const fNameInput = document.querySelector("#f-name").value;
  if (fNameInput == "") {
    console.log("khali ast");
  }

  const lastName = document.querySelector("#lastName").value;
  if (lastName == "") {
    document.querySelector(".error-lastName").innerText = "errorrrr";
  } else {
    document.querySelector(".error-lastName").innerText = "";
  }
  const phone = document.querySelector("#phone").value;
  if (phone == "") {
    document.querySelector(".error-phone").innerText = "errorrrr";
  } else {
    document.querySelector(".error-phone").innerText = "";
  }
  const email = document.querySelector("#email").value;
  if (email == "") {
    document.querySelector(".error-email").innerText = "errorrrr";
  } else {
    document.querySelector(".error-email").innerText = "";
  }
  const password = document.querySelector("#password").value;
  if (password == "") {
    document.querySelector(".error-password").innerText = "errorrrr";
  } else {
    document.querySelector(".error-password").innerText = "";
  }
  const gender = document.querySelector(["name='gender':checked"]);
  if (gender == "null") {
    document.querySelector(".error-gender").innerText = "select please";
  } else {
    document.querySelector(".error-gender").innerText = "";
  }
}

document.querySelector("#password").addEventListener("keyup", function (event) {
  if (event.target.value.length < 8) {
    event.target.nextElementsibling.innertext = "8";
  } else {
    event.target.nextElementsibling.innerText = "";
  }
});
