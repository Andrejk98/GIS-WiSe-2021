"use strict";
const uebersicht = document.getElementById("uebersicht");
window.addEventListener("load", init);
async function init(_event) {
    console.log("Says: ", await get());
    generateHTML(await get());
}
async function get() {
    let response = await fetch("http://localhost:3000/Gefrierschrank", {
        method: "GET"
    });
    let responseText = await response.text();
    let detailEvents = JSON.parse(responseText);
    return detailEvents;
}
function generateHTML(events) {
    events.forEach(event => {
        let gefriergutValue = event.Gefriergut;
        let ablaufdatumValue = Number(event.Ablaufdatum);
        let notizValue = event.Notiz;
        let anlegedatumValue = event.Notiz;
        const del = document.createElement("button");
        del.textContent = "delete";
        del.className = "deleteButton";
        del.type = "submit";
        del.addEventListener("click", deleteButtonHandler);
        function deleteButtonHandler() {
            newReihe.removeChild(newGefrierguElement);
            newReihe.removeChild(newAblaufdatumElement);
            newReihe.removeChild(newNotizElement);
            newReihe.removeChild(newDateElement);
            newReihe.removeChild(del);
        }
        const newGefrierguElement = document.createElement("td");
        newGefrierguElement.textContent = gefriergutValue;
        const newAblaufdatumElement = document.createElement("td");
        newAblaufdatumElement.textContent = String(ablaufdatumValue);
        const newNotizElement = document.createElement("td");
        newNotizElement.textContent = String(notizValue);
        const newDateElement = document.createElement("td");
        newDateElement.textContent = String(anlegedatumValue);
        const newReihe = document.createElement("tr");
        uebersicht.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(del);
        /*
                Detail.appendChild(newReihe);
                newReihe.appendChild(newGefrierguElement);
                newReihe.appendChild(newAblaufdatumElement);
                newReihe.appendChild(newNotizElement);
                newReihe.appendChild(newDateElement)
        */
    });
}
//# sourceMappingURL=auslesen.js.map