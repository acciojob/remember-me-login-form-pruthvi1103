const form = document.querySelector("form");
const existingBtn = document.getElementById("existing");

window.onload = function () {
  const user = localStorage.getItem("user");
  if (user) {
    existingBtn.style.display = "block";
  } else {
    existingBtn.style.display = "none";
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = e.target.username.value;
  const password = e.target.password.value;
  const rememberMe = e.target.checkbox.checked;

  alert(`Logged in as ${username}`);

  if (rememberMe) {
    localStorage.setItem("user", JSON.stringify({ username, password }));
    existingBtn.style.display = "block";
  } else {
    localStorage.removeItem("user");   
    existingBtn.style.display = "none";
  }
});

existingBtn.addEventListener("click", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    alert(`Logged in as ${user.username}`);
  }
});
