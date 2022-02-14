const toEUR = document.querySelector(".toEUR");
const toGBP = document.querySelector(".toGBP");
const toUSD = document.querySelector(".toUSD");
const disclaimer = document.querySelector(".disclaimer")
const updated = document.querySelector(".updated")
const d = new Date()

const refreshBtn = document.querySelector("#refreshBtn");
// Make a request for a user with a given ID

let fetchRes = fetch("https://api.coindesk.com/v1/bpi/currentprice.json");
fetchRes.then(res =>
  res.json()).then(time => {
  toEUR.innerHTML = time.bpi.EUR.code + ` ` + time.bpi.EUR.symbol + time.bpi.EUR.rate;
  toGBP.innerHTML = time.bpi.GBP.code + ` ` + time.bpi.GBP.symbol + time.bpi.GBP.rate;
  toUSD.innerHTML = time.bpi.USD.code + ` ` + time.bpi.USD.symbol + time.bpi.USD.rate;
  updated.innerHTML = `Updated: ` + d.toDateString();
  disclaimer.innerHTML = `Disclaimer: ` + time.disclaimer;
})

// function refreshPage(params) {
//   // location.reload();
//  location.reload();
// }
// refreshBtn.addEventListener('click', refreshPage())