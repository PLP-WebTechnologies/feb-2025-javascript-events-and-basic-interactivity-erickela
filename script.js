// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked! 🎉");
});

document.getElementById("hoverBtn").addEventListener("mouseover", () => {
  document.getElementById("hoverBtn").style.backgroundColor = "#ffb3b3";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log("Key pressed: ", e.key);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("🎯 Secret unlocked on double-click!");
});

// Interactive Elements
function changeColor() {
  document.body.style.backgroundColor =
    "#" + Math.floor(Math.random() * 16777215).toString(16);
}

let currentImg = 101;
function nextImage() {
  currentImg++;
  document.getElementById("galleryImg").src = `https://picsum.photos/id/${currentImg}/300/200`;
}

// Tabs
function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

// Form Validation
function validateForm() {
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("feedback");

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters long!";
    return false;
  }

  feedback.textContent = "";
  alert("Form submitted successfully! ✅");
  return true;
}

// Real-time feedback for password
document.getElementById("password").addEventListener("input", function () {
  const feedback = document.getElementById("feedback");
  if (this.value.length < 8) {
    feedback.textContent = "Password must be at least 8 characters!";
  } else {
    feedback.textContent = "";
  }
});
