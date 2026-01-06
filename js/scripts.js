let navLinks = document.getElementById("nav-links");

function showMenu() {
    navLinks.style.right = "0";
}

function hideMenu() {
    navLinks.style.right = "-200px";
}

const quotes = [
  "“Education is the most powerful weapon which you can use to change the world.” — Nelson Mandela",
  "“You are braver than you believe, stronger than you seem, and smarter than you think.” — A.A. Milne",
  "“It always seems impossible until it’s done.” — Nelson Mandela",
  "“Don’t let what you can’t do stop you from doing what you can do.” — John Wooden",
  "“Mistakes are proof that you are trying.” — Jennifer Lim",
  "“Shoot for the moon. Even if you miss, you’ll land among the stars.” — Norman Vincent Peale"
];

let index = 0;
const quoteText = document.getElementById('quote-text');

function showNextQuote() {
  quoteText.style.opacity = 0;

  setTimeout(() => {
    quoteText.textContent = quotes[index];
    quoteText.style.opacity = 1;
    index = (index + 1) % quotes.length;
  }, 500);
}

// Start slideshow
setInterval(showNextQuote, 4000);
showNextQuote(); // Show first quote


//calender
document.addEventListener("DOMContentLoaded", function () {

  const events = document.querySelectorAll(".event");
  const modalOverlay = document.getElementById("modalOverlay");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const closeModal = document.getElementById("closeModal");

  events.forEach(day => {
    day.addEventListener("click", () => {
      modalTitle.textContent = day.dataset.event;
      modalDescription.textContent = "IkusasaLentsha official event for learners.";
      modalOverlay.style.display = "flex";
    });
  });

  closeModal.addEventListener("click", () => {
    modalOverlay.style.display = "none";
  });

  modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
      modalOverlay.style.display = "none";
    }
  });

});
