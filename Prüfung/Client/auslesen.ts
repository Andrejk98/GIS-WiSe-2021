const uebersicht: HTMLTableElement = <HTMLTableElement>document.getElementById("uebersicht");
const Detail: HTMLElement = <HTMLElement>document.getElementById("detail");
window.addEventListener("load", init);

async function init(_event: Event): Promise<void> {
    console.log("Says: ", await get());
    generateHTML(await get());

}

interface detailEvent{
    Gefriergut: string;
    Ablaufdatum: string;
    Notiz: string;
    Anlegedatum: Date;
    Kategorie: string;
}
//Daten von MongoDB auslesen
async function get(): Promise<detailEvent[]> {

    let response: Response = await fetch("http://localhost:3000/Gefrierschrank", {
        method: "GET"
    });

    let responseText: string = await response.text();

    let detailEvents: detailEvent[] = JSON.parse(responseText);

    return detailEvents;
}
//HTML Seite aktualisieren
function generateHTML(events: detailEvent[]) {
    events.forEach(event => {
        let gefriergutValue: string = inputGefriergut.value;
        let ablaufdatumValue: string = inputAblaufdatum.value;
        let notizValue: string = inputNotiz.value;
        let anlegeDatum: Date = new Date(); // aktuelles Datum
        let kategorieValue: string = inputKategorie.value;
        const del: HTMLButtonElement = document.createElement("button");//Delete button erstellen
        del.textContent = "delete";
        del.className = "deleteButton";
        del.type = "submit";
        del.addEventListener("click", deleteButtonHandler);
//Deletebutton funktion
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
        newDateElement.textContent = String(anlegeDatum);
        const newKategorieElement: HTMLTableCellElement = document.createElement("td");
        newKategorieElement.textContent = String(kategorieValue);
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
        newReihe.appendChild(newDateElement);
        newReihe.appendChild(newKategorieElement);


    });
}