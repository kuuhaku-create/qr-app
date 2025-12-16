function showQR(id) {
  document.getElementById("menu").style.display = "none";
  document.getElementById("qrArea").style.display = "block";
  document.getElementById("qrImage").src = "qr/" + id + ".png";
}

function back() {
  document.getElementById("qrArea").style.display = "none";
  document.getElementById("menu").style.display = "block";
}
