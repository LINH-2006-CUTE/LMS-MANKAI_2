//hiển thị overlay
function showOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.classList.add("active");
}

// ẩn overlay
function hideOverlay() {
  const overlay = document.getElementById("overlay");
  overlay.classList.remove("active");
}

document.querySelectorAll(".ans-1, .ans-2").forEach((button) => {
  button.addEventListener("click", showOverlay);
});

// Đóng overlay 
document.getElementById("overlay").addEventListener("click", hideOverlay);