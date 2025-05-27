
console.log("Welcome to the Community Portal");

window.onload = () => {
  alert("Page loaded!");
  init();
};

let events = [
  { id: 1, name: "Music Fest", date: "2025-06-20", seats: 5, category: "music" },
  { id: 2, name: "Tech Talk", date: "2025-06-10", seats: 0, category: "tech" },
  { id: 3, name: "Art Expo", date: "2025-06-15", seats: 10, category: "art" }
];

function displayEvents() {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";
  events.forEach(event => {
    if (new Date(event.date) > new Date() && event.seats > 0) {
      const card = document.createElement("div");
      card.innerHTML = `<h3>${event.name}</h3><p>${event.date}</p><p>Seats: ${event.seats}</p><button onclick="registerUser(${event.id})">Register</button>`;
      container.appendChild(card);
    }
  });
}

function registerUser(eventId) {
  const event = events.find(e => e.id === eventId);
  if (event && event.seats > 0) {
    try {
      event.seats--;
      alert("Registered successfully!");
      displayEvents();
    } catch (err) {
      console.error("Registration failed", err);
    }
  }
}

function init() {
  displayEvents();
  const form = document.getElementById("registrationForm");
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    const data = new FormData(form);
    const user = {
      name: data.get("name"),
      email: data.get("email"),
      event: data.get("event")
    };
    if (!user.name || !user.email) {
      alert("Please fill out the form");
      return;
    }
    document.getElementById("loading").style.display = "block";
    setTimeout(() => {
      document.getElementById("loading").style.display = "none";
      alert("Registration submitted!");
    }, 1000);
  });

  const select = document.getElementById("eventSelect");
  events.forEach(e => {
    const option = document.createElement("option");
    option.value = e.name;
    option.text = e.name;
    select.appendChild(option);
  });
}
