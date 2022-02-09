let url =
  "https://openexchangerates.org/api/latest.json?app_id=f6022ce66f5048338fb1896198a438e3&base=USD";

let curr = document.getElementById("curDrop");
let display = document.querySelector("#display");

// function rate(curr) {
//   const idx = currencies.findIndex(function (name) {
//     return currenc;
//   });

//   if (idx === -1) {
//     return null;
//   }

//   return usStates[idx].abbreviation;
// }

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    for (let [key, value] of Object.entries(data.rates)) {
      curr.innerHTML += `<option>${key} ${value}</option>`;
      curr.addEventListener("change", function (e) {
        let bob = Object;
        display.innerHTML += bob;
      });
    }
  });
// .then(() => {
//   for (let currency of currencies)

// })
