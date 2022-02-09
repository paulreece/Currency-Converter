let url =
  "https://openexchangerates.org/api/latest.json?app_id=f6022ce66f5048338fb1896198a438e3&base=USD";

let curr = document.getElementById("curDrop");
let curr2 = document.getElementById("curDrop2");
let display = document.querySelector("#display");
let amount = document.getElementById("amount");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    for (let [key, value] of Object.entries(data.rates)) {
      curr.innerHTML += `<option id='${key}'>${key}</option>`;
      curr2.innerHTML += `<option id='${key}'>${key}</option>`;

      convert.addEventListener("click", function (e) {
        let keyid = curr.options[curr.selectedIndex].value;
        let keyed = data.rates[keyid];
        let convertedUS = amount.value * keyed;
        let keyids = curr2.options[curr2.selectedIndex].value;
        let keyeds = data.rates[keyids];

        let actualConv = convertedUS * keyeds;

        display.innerHTML = actualConv.toFixed(2) + " " + keyids;
      });
    }
  });
