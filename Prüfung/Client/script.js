"use strict";
const inputGefriergut = document.getElementById("gefriergut");
const inputAblaufdatum = document.getElementById("ablaufdatum");
const inputNotiz = document.getElementById("notiz");
const inputKategorie = document.getElementById("kategorie");
const enterButton1 = document.getElementById("enter");
enterButton1.addEventListener("click", function (_evt) {
    _evt.preventDefault();
    //console.log("ausgabe");
    enterButtonHandler();
});
function enterButtonHandler() {
    let gefriergutValue = inputGefriergut.value;
    let ablaufdatumValue = inputAblaufdatum.value;
    let notizValue = inputNotiz.value;
    let anlegeDatum = new Date(); // aktuelles Datum
    let kategorieValue = inputKategorie.value;
    console.log(gefriergutValue);
    console.log(ablaufdatumValue);
    console.log(notizValue);
    console.log(anlegeDatum);
    /*
        const del: HTMLButtonElement = document.createElement("button");
        del.textContent = "delete";
        del.className = "deleteButton";
        del.type = "submit";
        del.addEventListener("click", deleteButtonHandler);
    */
    /*
        const newGefrierguElement: HTMLTableCellElement = document.createElement("td");
        newGefrierguElement.textContent = gefriergutValue;
        const newAblaufdatumElement: HTMLTableCellElement = document.createElement("td");
        newAblaufdatumElement.textContent = String(ablaufdatumValue);
        const newNotizElement: HTMLTableCellElement = document.createElement("td");
        newNotizElement.textContent = String(notizValue);
        const newDateElement: HTMLTableCellElement = document.createElement("td");
        newDateElement.textContent = String(anlegeDatum)
        const newReihe: HTMLTableRowElement = document.createElement("tr");
    */
    //console.log(uebersicht);
    //console.log(newReihe);
    /*
        uebersicht.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(del);
    
        Detail.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(newNotizElement);
        newReihe.appendChild(newDateElement)
    
        function deleteButtonHandler(): void {
            newReihe.removeChild(newGefrierguElement);
            newReihe.removeChild(newAblaufdatumElement);
            newReihe.removeChild(newNotizElement);
            newReihe.removeChild(newDateElement);
            newReihe.removeChild(del);
        }
    */
    let detailEvent = {
        Gefriergut: gefriergutValue,
        Ablaufdatum: ablaufdatumValue,
        Notiz: notizValue,
        Anlegedatum: anlegeDatum,
        Kategorie: kategorieValue
    };
    post(detailEvent);
}
//Daten an MongoDB schicken
async function post(detailEvent) {
    console.log(detailEvent);
    await fetch("http://localhost:3000/Gefrierschrank", {
        method: "POST",
        body: JSON.stringify(detailEvent)
    });
    console.log(detailEvent);
}
/*
//Daten von MongoDB auslesen
async function get(): Promise<detailEvent[]> {

    let response: Response = await fetch("http://localhost:3000/Gefrierschrank", {
        method: "GET"
    });

    let responseText: string = await response.text();

    let detailEvents: detailEvent[] = JSON.parse(responseText);

    return detailEvents;
}
*/
/*
//Seite aktualisieren
function generateHTML(events: detailEvent[]) {
    events.forEach(event => {
        let gefriergutValue: string = event.Gefriergut;
        let ablaufdatumValue: number = Number(event.Ablaufdatum);
        let notizValue: string = event.Notiz;
        let anlegedatumValue: Date = event.Anlegedatum;
        const del: HTMLButtonElement = document.createElement("button");
        del.textContent = "delete";
        del.className = "deleteButton";
        del.type = "submit";
        del.addEventListener("click", deleteButtonHandler);

        function deleteButtonHandler(): void {
            newReihe.removeChild(newGefrierguElement);
            newReihe.removeChild(newAblaufdatumElement);
            newReihe.removeChild(newNotizElement);
            newReihe.removeChild(newDateElement);
            newReihe.removeChild(del);
        }

        const newGefrierguElement: HTMLTableCellElement = document.createElement("td");
        newGefrierguElement.textContent = gefriergutValue;
        const newAblaufdatumElement: HTMLTableCellElement = document.createElement("td");
        newAblaufdatumElement.textContent = String(ablaufdatumValue);
        const newNotizElement: HTMLTableCellElement = document.createElement("td");
        newNotizElement.textContent = String(notizValue);
        const newDateElement: HTMLTableCellElement = document.createElement("td");
        newDateElement.textContent = String(anlegedatumValue)
        const newReihe: HTMLTableRowElement = document.createElement("tr");
//Tabellenreihen hinzufügen
        uebersicht.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(del);

        Detail.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(newNotizElement);
        newReihe.appendChild(newDateElement)

    });
}*/
//# sourceMappingURL=script.js.map