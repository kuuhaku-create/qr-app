function showQR(id) {
  document.getElementById("menu").style.display = "none";
  const qrArea = document.getElementById("qrArea");
  qrArea.style.display = "block";
  document.getElementById("qrImage").src = "qr/" + id + ".png";

  requestAnimationFrame(() => {
    qrArea.classList.add("show");
  });
}

function back() {
  const qrArea = document.getElementById("qrArea");
  qrArea.classList.remove("show");

  setTimeout(() => {
    qrArea.style.display = "none";
    document.getElementById("menu").style.display = "block";
  }, 250);
}

const loginForm = document.getElementById("loginForm");
const passwordInput = document.getElementById("passwordInput");

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const password = passwordInput.value;
  
  const encoder = new TextEncoder();
  const data = encoder.encode(password);

  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));

  const hashHex = hashArray
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  const CORRECT_HASH = "8bfe5fabd6fa33c5fa4d0cc336e334bfab6624c306ed1bff11b4f50dfc745d3e";

  if (hashHex === CORRECT_HASH) {
    document.querySelector(".login-wrapper").style.display = "none";
    document.querySelector(".header").style.display = "block";
    document.querySelector(".app").style.display = "block";
    document.getElementById("errorMessage").textContent = "";
    document.getElementById("errorMessage").style.opacity = 0;
  } else {
    document.getElementById("errorMessage").textContent = "パスワードが違います";
    document.getElementById("errorMessage").style.opacity = 1;
  }
});