let cookies = 0;
let cpc = 1;
let upgradeCost = 10;
function cookieClick() {
  cookies += cpc;
  updateDisplay();
}
function cookieUpgrade() {
  if (cookies >= upgradeCost) {
    cpc += 1;
    cookies -= upgradeCost;
    upgradeCost = Math.floor(upgradeCost * 1.5);
    showPurchasedMessage("Purchased", 1000);
    updateDisplay();
  } else {
    showNotEnoughMessage("Not Enough Cookies", 1000);
  }
}
function updateDisplay() {
  document.querySelector('.cookieCounter').innerHTML = `Cookies: ${cookies}`;
  document.querySelector('.cookiePerClick').innerHTML = `Cookies Per Click: ${cpc}`;
  document.querySelector('.cookieUpgradeButton').innerHTML = `+1 Cookie Per Click <br> Cost: ${upgradeCost} cookies`;
}
function showNotEnoughMessage(text, duration) {
  const messageElement = document.querySelector(".notEnoughMessage");
  messageElement.style.display = "block";
  messageElement.innerHTML = text;
  messageElement.style.color = "red"

  setTimeout(hideMessage, duration);
}
function showPurchasedMessage(text, duration) {
  const messageElement = document.querySelector(".notEnoughMessage");
  messageElement.style.display = "block";
  messageElement.innerHTML = text;
  messageElement.style.color = "rgb(25, 199, 2)";
  
  setTimeout(hideMessage, duration);
}
function hideMessage() {
  document.querySelector(".notEnoughMessage").style.display = "none";
}
