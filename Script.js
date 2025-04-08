function validate(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const age = document.getElementById("age").value;

  const msgBox = document.getElementById("message");

  let message = "";

  if (email === "") {
    message = "* Enter Email";
    msgBox.style.color = "red";
  } else if (pass === "") {
    message = "* Passward Min Length - 8 Characters";
    msgBox.style.color = "red";
  } else if (age === "") {
    message = "* Age Requirment - 12 - 50 years";
    msgBox.style.color = "red";
  } else {
    message = "* Login Successful";
    msgBox.style.color = "green";
  }

  msgBox.innerText = message;
}
