const countdownElement = document.getElementById('countdown');

// Set the New Year date
const newYearDate = new Date('January 1, 2025 00:00:00').getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const timeLeft = newYearDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    ${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds
  `;

  if (timeLeft < 0) {
    clearInterval(timer);
    countdownElement.innerHTML = "🎉 Happy New Year! 🎆";
  }
};

const timer = setInterval(updateCountdown, 1000);

