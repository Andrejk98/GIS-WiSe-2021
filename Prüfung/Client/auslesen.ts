const uebersicht: HTMLTableElement = <HTMLTableElement>document.getElementById("uebersicht");

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
}

async function get(): Promise<detailEvent[]> {

    let response: Response = await fetch("http://localhost:3000/Gefrierschrank", {
        method: "GET"
    });

    let responseText: string = await response.text();

    let detailEvents: detailEvent[] = JSON.parse(responseText);

    return detailEvents;
}

function generateHTML(events: detailEvent[]) {
    events.forEach(event => {
        let gefriergutValue: string = event.Gefriergut;
        let ablaufdatumValue: number = Number(event.Ablaufdatum);
        let notizValue: string = event.Notiz;
        let anlegedatumValue: string = event.Notiz;
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