window.addEventListener("load", solve);

function solve(ev) {
  let makeEl = document.getElementById("make");
  let modelEl = document.getElementById("model");
  let currentYear = document.getElementById("year");
  let fuelEl = document.getElementById("fuel");
  let originalPriceEl = document.getElementById("original-cost");
  let sellingPriceEl = document.getElementById("selling-price");
  let btnPublishEl = document.getElementById("publish");
  btnPublishEl.addEventListener("click", boxMaker);

  function boxMaker(e) {
    e.preventDefault();
    const input = {
      make: makeEl.value,
      model: modelEl.value,
      year: currentYear.value,
      fuel: fuelEl.value,
      originalPrice: originalPriceEl.value,
      sellingPrice: sellingPriceEl.value,
    };
    if (
      input.make != "" &&
      input.model != "" &&
      input.year != "" &&
      input.fuel != "" &&
      input.originalPrice < input.sellingPrice
    ) {
      let tbody = document.getElementById("table-body");
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let button = document.createElement("button");

      for (const value of Object.values(input)) {
        td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
      makeEl.value = "";
      modelEl.value = "";
      currentYear.value = "";
      fuelEl.value = "";
      originalPriceEl.value = "";
      sellingPriceEl.value = "";

      td = document.createElement("td");
      button.textContent = "Edit";
      button.className = "action-btn edit";
      button.addEventListener("click", edit);
      td.appendChild(button);

      button = document.createElement("button");
      button.textContent = "Sell";
      button.className = "action-btn sell";
      button.addEventListener("click", sell);
      td.appendChild(button);
      tr.appendChild(td);
      tr.className = "row";
      tbody.appendChild(tr);
    }
    function edit(ev) {
      let tbody = document.getElementById("table-body");
      let tr = document.querySelector("#table-body tr");

      makeEl.value = input.make;
      modelEl.value = input.model;
      currentYear.value = input.year;
      fuelEl.value = input.fuel;
      originalPriceEl.value = input.originalPrice;
      sellingPriceEl.value = input.sellingPrice;

      tbody.removeChild(tr);
    }

    function sell(ev) {
      let tbody = document.getElementById("table-body");
      let tr = document.querySelector("#table-body tr");
      let ul = document.getElementById("cars-list");
      let li = document.createElement("li");
      let profit = document.getElementById("profit");
      li.className = "each-list";

      let span = document.createElement("span");
      span.textContent = `${input.make} ${input.model}`;
      li.appendChild(span);

      span = document.createElement("span");
      span.textContent = `${input.year}`;
      li.appendChild(span);

      span = document.createElement("span");
      span.textContent = `${Number(input.sellingPrice) - Number(input.originalPrice)}`;
      li.appendChild(span);
      ul.appendChild(li);

      profit.textContent = (Number(profit.textContent) + Number(span.textContent)).toFixed(2);
      tbody.removeChild(tr);
    }
  }
}
