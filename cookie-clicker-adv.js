window.onload = function() {
  loadGame();
  updateDisplay();
}
let cookies = 0;
let cpc = 1;
let cps = 0;
let upgradeClickerCost = 10;
let upgradeACCost = 25;
let clickerAmount = 0;
let autoClickerAmount = 0;
function cookieClick() {
  cookies += cpc;
  updateDisplay();
}
function autoClick() {
  cookies += cps;
  updateDisplay();
}
function startAutoClicker() {
    setInterval(function () {
    if(cps > 0) {
      cookies += cps / 10;
      updateDisplay();
    }
  }, 100);
}
startAutoClicker();
function cookieACUpgrade() {
  if (cookies >= upgradeACCost) {
    cps += 1;
    cookies -= upgradeACCost;
    upgradeACCost = Math.floor(upgradeACCost * 1.25);
    autoClickerAmount +=1;
    showPurchasedMessage("Purchased", 1000);
    updateDisplay();
  } else {
    showNotEnoughMessage("Not Enough Cookies", 1000);
  }
}
function cookieClickUpgrade() {
  if (cookies >= upgradeClickerCost) {
    cpc += 1;
    cookies -= upgradeClickerCost;
    upgradeClickerCost = Math.floor(upgradeClickerCost * 1.25);
    clickerAmount +=1;
    showPurchasedMessage("Purchased", 1000);
    updateDisplay();
  } else {
    showNotEnoughMessage("Not Enough Cookies", 1000);
  }
}
function updateDisplay() {
  document.querySelector('.cookieCounter').innerHTML = `Cookies: ${Math.floor(cookies)}`;
  document.querySelector('.cookiePerClick').innerHTML = `Cookies Per Click: ${cpc}`;
  document.querySelector('.cookiePerSecond').innerHTML = `Cookies Per Second: ${cps}`;
  document.querySelector('.cookieClickUpgradeButton').innerHTML = `<div class="cookieClickUpgradeButtonTitle">Clicker</div> +1 Cookie Per Click <br> Cost: ${upgradeClickerCost} cookies <br> Clickers bought: ${clickerAmount}`;
  document.querySelector('.cookieACUpgradeButton').innerHTML = `<div class="cookieACUpgradeButtonTitle"> Auto Clicker</div> +1 Cookie Per Second <br> Cost: ${upgradeACCost} cookies <br> Auto Clickers bought: ${autoClickerAmount}`;
  saveGame();
}
function showNotEnoughMessage(text, duration) {
  const messageElement = document.querySelector(".notEnoughMessage");
  messageElement.style.display = "block";
  messageElement.innerHTML = text;
  messageElement.style.color = "red"

  setTimeout(hideMessage, duration);
}
function showPurchasedMessage(text, duration) {
  const messageElement = document.querySelector(".purchasedMessage");
  messageElement.style.display = "block";
  messageElement.innerHTML = text;
  messageElement.style.color = "rgb(25, 199, 2)";
  
  setTimeout(hideMessage, duration);
}
function hideMessage() {
  document.querySelector(".notEnoughMessage").style.display = "none";
  document.querySelector(".purchasedMessage").style.display = "none";
}
function saveGame() {
localStorage.setItem('cookies', cookies);
localStorage.setItem('cpc', cpc);
localStorage.setItem('cps', cps);
localStorage.setItem('upgradeClickerCost', upgradeClickerCost);
localStorage.setItem('upgradeACCost', upgradeACCost);
localStorage.setItem('clickerAmount', clickerAmount);
localStorage.setItem('autoClickerAmount', autoClickerAmount);
}
function loadGame() {
  cookies = Number(localStorage.getItem("cookies")) || 0;
  cpc = Number(localStorage.getItem("cpc")) || 1;
  cps = Number(localStorage.getItem("cps")) || 0;
  upgradeClickerCost = Number(localStorage.getItem("upgradeClickerCost")) || 10;
  upgradeACCost = Number(localStorage.getItem("upgradeACCost")) || 25;
  clickerAmount = Number(localStorage.getItem("clickerAmount")) || 0;
  autoClickerAmount = Number(localStorage.getItem("autoClickerAmount")) || 0;
}
