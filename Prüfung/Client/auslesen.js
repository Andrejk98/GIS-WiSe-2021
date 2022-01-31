"use strict";
const uebersicht = document.getElementById("uebersicht");
const Detail = document.getElementById("detail");
window.addEventListener("load", init);
async function init(_event) {
    console.log("Says: ", await get());
    generateHTML(await get());
}
//Daten von MongoDB auslesen
async function get() {
    let response = await fetch("http://localhost:3000/Gefrierschrank", {
        method: "GET"
    });
    let responseText = await response.text();
    let detailEvents = JSON.parse(responseText);
    return detailEvents;
}
//HTML Seite aktualisieren
function generateHTML(events) {
    events.forEach(event => {
        let gefriergutValue = inputGefriergut.value;
        let ablaufdatumValue = inputAblaufdatum.value;
        let notizValue = inputNotiz.value;
        let anlegeDatum = new Date(); // aktuelles Datum
        let kategorieValue = inputKategorie.value;
        const del = document.createElement("button"); //Delete button erstellen
        del.textContent = "delete";
        del.className = "deleteButton";
        del.type = "submit";
        del.addEventListener("click", deleteButtonHandler);
        //Deletebutton funktion
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
        newDateElement.textContent = String(anlegeDatum);
        const newKategorieElement = document.createElement("td");
        newKategorieElement.textContent = String(kategorieValue);
        const newReihe = document.createElement("tr");
        //Tabellenreihen hinzufügen        
        uebersicht.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(newKategorieElement);
        newReihe.appendChild(del);
        Detail.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(newNotizElement);
        newReihe.appendChild(newDateElement);
        newReihe.appendChild(newKategorieElement);
    });
}
//# sourceMappingURL=auslesen.js.map