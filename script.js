let maxEnergy = 200;
let usedEnergy = 0;
let route = [];
const energyDisplay = document.getElementById("energy-value");
const energyBar = document.getElementById("energy-fill");
const energyUsedDisplay = document.getElementById("energy-used");
const routeList = document.getElementById("route-list");

const locationCosts = {
  surface: 40,
  coral: 55,
  ship: 75,
  home: 30
};

function updateEnergyDisplay() {
  const remaining = maxEnergy - usedEnergy;
  energyDisplay.textContent = `${remaining} / ${maxEnergy}`;
  energyBar.style.width = `${(remaining / maxEnergy) * 100}%`;
  energyUsedDisplay.textContent = `Total Energy Used: ${usedEnergy} / ${maxEnergy}`;
}

function selectLocation(loc) {
  if (!route.includes(loc)) {
    route.push(loc);
    usedEnergy += locationCosts[loc];
    document.getElementById(loc).classList.add("selected");

    const item = document.createElement("li");
    item.textContent = `${document.getElementById(loc).dataset.name} (-${locationCosts[loc]} energy)`;
    routeList.appendChild(item);

    updateEnergyDisplay();
  }
}

function validateRoute() {
  if (!route.includes("home")) {
    alert("⚠️ You must return to the Home Cave!");
  } else if (usedEnergy > maxEnergy) {
    alert("❌ Not enough energy to complete this route!");
  } else {
    alert("✅ Route validated! Good job, mermaid!");
  }
}
