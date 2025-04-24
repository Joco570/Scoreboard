let homeScore = 0;
let guestScore = 0;

function addPoints(team, points) {
  if (team === "home") {
    homeScore += points;
    document.getElementById("home-screen").textContent = homeScore;
    highlight();
  } else if (team === "guest") {
    guestScore += points;
    document.getElementById("guest-screen").textContent = guestScore;
    highlight();
  }
}

function reset() {
  homeScore = 0;
  guestScore = 0;
  document.getElementById("guest-screen").textContent = guestScore;
  document.getElementById("home-screen").textContent = homeScore;
  highlight();
}

function highlight() {
  if (homeScore > guestScore) {
    document.getElementById("guest-score").classList.remove("leader");
    document.getElementById("home-score").classList.add("leader");
  } else if (homeScore < guestScore) {
    document.getElementById("home-score").classList.remove("leader");
    document.getElementById("guest-score").classList.add("leader");
  } else {
    document.getElementById("home-score").classList.remove("leader");
    document.getElementById("guest-score").classList.remove("leader");
  }
}
