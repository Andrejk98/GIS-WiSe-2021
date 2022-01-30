const inputGefriergut: HTMLInputElement = <HTMLInputElement>document.getElementById("gefriergut");
const inputAblaufdatum: HTMLInputElement = <HTMLInputElement>document.getElementById("ablaufdatum");
const inputNotiz: HTMLInputElement = <HTMLInputElement>document.getElementById("notiz");
//const uebersicht: HTMLTableElement = <HTMLTableElement>document.getElementById("uebersicht");
const Detail: HTMLElement = <HTMLElement>document.getElementById("detail");
const enterButton1: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enter");
enterButton1.addEventListener("click", function (_evt: Event): void {
    _evt.preventDefault();
    //console.log("ausgabe");
    enterButtonHandler();
  });
/*
window.addEventListener("load", init);


async function init(_event: Event): Promise<void> {
    console.log("Says: ", await get());
    generateHTML(await get());

}
*/
/*
interface uebersichtEvent{
    Gefriergut: string;
    Ablaufdatum: Date;
}
*/
interface detailEvent{
    Gefriergut: string;
    Ablaufdatum: string;
    Notiz: string;
    Anlegedatum: Date;
}

function enterButtonHandler(): void {
    let gefriergutValue: string = inputGefriergut.value;
    let ablaufdatumValue: string = inputAblaufdatum.value;
    let notizValue: string = inputNotiz.value;
    let anlegeDatum: Date = new Date(); // aktuelles Datum
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

    let detailEvent: detailEvent = {
        Gefriergut: gefriergutValue,
        Ablaufdatum: ablaufdatumValue,
        Notiz: notizValue,
        Anlegedatum: anlegeDatum
    };
    post(detailEvent);

}

async function post(detailEvent: detailEvent): Promise<void> {
    console.log(detailEvent);
    await fetch("http://localhost:3000/Gefrierschrank", {
        method: "POST",
        body: JSON.stringify(detailEvent)
    });
    console.log(detailEvent);
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

        Detail.appendChild(newReihe);
        newReihe.appendChild(newGefrierguElement);
        newReihe.appendChild(newAblaufdatumElement);
        newReihe.appendChild(newNotizElement);
        newReihe.appendChild(newDateElement)

    });
}
