const menueMobile = document.getElementById("hamburger");
const menu = document.getElementById("menuMobile");
const items = document.querySelectorAll(".faq-item");
const email = document.getElementById("email");
const errorMsg = document.getElementById("email-error");
const contactBtn = document.getElementById("contact");
const upBtn = document.getElementById("up");
// Toggle Menu
menueMobile.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
// Toggle FAQ
items.forEach((item) => {
  const question = item.querySelector(".faq-question");
  question.addEventListener("click", () => {
    const isOpen = item.classList.contains("open");
    items.forEach((i) => i.classList.remove("open"));
    if (!isOpen) {
      item.classList.add("open");
    }
  });
});

// Function Check Email
function checkEmail(emailcheck) {
  const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return pattern.test(emailcheck);
}

contactBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const emailValue = email.value.trim();
  // Check
  if (emailValue === "" || !checkEmail(emailValue)) {
    errorMsg.classList.remove("hidden");
    email.classList.remove("border-transparent");
    email.classList.add("border-red-500");
  } else {
    errorMsg.classList.add("hidden");
    email.classList.remove("border-transparent");
    email.classList.add("border-green-500");
    alert("Email sent successfully!");
    email.value = "";
  }
});
// Scroll To Top
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    upBtn.classList.remove("opacity-0");
    upBtn.classList.remove("opacity-1");
  } else {
    upBtn.classList.add("opacity-0");
  }
});
upBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
