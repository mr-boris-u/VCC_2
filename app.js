// Greet the visitor based on the time of day
const hour = new Date().getHours();
let greeting;

if (hour < 12) {
  greeting = "Good morning";
} else if (hour < 18) {
  greeting = "Good afternoon";
} else {
  greeting = "Good evening";
}

console.log(`${greeting}! Welcome to my site.`);

// Show it on the page if there's an element with id="greeting"
const greetingEl = document.getElementById("greeting");
if (greetingEl) {
  greetingEl.textContent = `${greeting}! Welcome to my site.`;
}