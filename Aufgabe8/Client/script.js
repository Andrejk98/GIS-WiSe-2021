"use strict";
const inputIntpret = document.getElementById("interpret");
const inputPrice = document.getElementById("price");
const showMe = document.getElementById("show");
const enterButton = document.getElementById("enter");
enterButton.addEventListener("click", enterButtonHandler);
window.addEventListener("load", init);
async function init(_event) {
    console.log("Says: ", await get());
    generateHTML(await get());
}
function enterButtonHandler() {
    let interpretValue = inputIntpret.value;
    let priceValue = Number(inputPrice.value);
    const del = document.createElement("button");
    del.textContent = "delete";
    del.className = "deleteButton";
    del.type = "submit";
    del.addEventListener("click", deleteButtonHandler);
    const newInterpretElement = document.createElement("td");
    newInterpretElement.textContent = interpretValue;
    const newPriceElement = document.createElement("td");
    newPriceElement.textContent = String(priceValue);
    const newReihe = document.createElement("tr");
    showMe.appendChild(newReihe);
    newReihe.appendChild(newInterpretElement);
    newReihe.appendChild(newPriceElement);
    newReihe.appendChild(del);
    function deleteButtonHandler() {
        newReihe.removeChild(newInterpretElement);
        newReihe.removeChild(newPriceElement);
        newReihe.removeChild(del);
    }
    let concertEvent = {
        interpret: interpretValue,
        price: priceValue
    };
    post(concertEvent);
}
async function post(concertEvent) {
    console.log(concertEvent);
    await fetch("http://localhost:3000/concertEvent", {
        method: "POST",
        body: JSON.stringify(concertEvent)
    });
}
async function get() {
    let response = await fetch("http://localhost:3000/concertEvent", {
        method: "GET"
    });
    let responseText = await response.text();
    let concertEvents = JSON.parse(responseText);
    return concertEvents;
}
function generateHTML(events) {
    events.forEach(event => {
        let interpretValue = event.interpret;
        let priceValue = Number(event.price);
        const del = document.createElement("button");
        del.textContent = "delete";
        del.className = "deleteButton";
        del.type = "submit";
        del.addEventListener("click", deleteButtonHandler);
        function deleteButtonHandler() {
            newReihe.removeChild(newInterpretElement);
            newReihe.removeChild(newPriceElement);
            newReihe.removeChild(del);
        }
        const newInterpretElement = document.createElement("td");
        newInterpretElement.textContent = interpretValue;
        const newPriceElement = document.createElement("td");
        newPriceElement.textContent = String(priceValue);
        const newReihe = document.createElement("tr");
        showMe.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(del);
    });
}
//# sourceMappingURL=script.js.map