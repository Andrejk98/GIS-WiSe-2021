const inputIntpret: HTMLInputElement = <HTMLInputElement>document.getElementById("interpret");
const inputPrice: HTMLInputElement = <HTMLInputElement>document.getElementById("price");
const showMe: HTMLElement = <HTMLElement>document.getElementById("show");
const enterButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("enter");
enterButton.addEventListener("click", enterButtonHandler);


window.addEventListener("load", init);


async function init(_event: Event): Promise<void> {
    console.log("Says: ", await get());
    generateHTML(await get());

}

interface concertEvent {
    interpret: string;
    price: number;
}

function enterButtonHandler(): void {
    let interpretValue: string = inputIntpret.value;
    let priceValue: number = Number(inputPrice.value);
    const del: HTMLButtonElement = document.createElement("button");
    del.textContent = "delete";
    del.className = "deleteButton";
    del.type = "submit";
    del.addEventListener("click", deleteButtonHandler);

    const newInterpretElement: HTMLTableCellElement = document.createElement("td");
    newInterpretElement.textContent = interpretValue;
    const newPriceElement: HTMLTableCellElement = document.createElement("td");
    newPriceElement.textContent = String(priceValue);
    const newReihe: HTMLTableRowElement = document.createElement("tr");

    showMe.appendChild(newReihe);
    newReihe.appendChild(newInterpretElement);
    newReihe.appendChild(newPriceElement);
    newReihe.appendChild(del);

    function deleteButtonHandler(): void {
        newReihe.removeChild(newInterpretElement);
        newReihe.removeChild(newPriceElement);
        newReihe.removeChild(del);
    }

    let concertEvent: concertEvent = {
        interpret: interpretValue,
        price: priceValue
    };
    post(concertEvent);
}

async function post(concertEvent: concertEvent): Promise<void> {
    console.log(concertEvent);
    await fetch("http://localhost:3000/concertEvent", {
        method: "POST",
        body: JSON.stringify(concertEvent)
    });
}



async function get(): Promise<concertEvent[]> {

    let response: Response = await fetch("http://localhost:3000/concertEvent", {
        method: "GET"
    });

    let responseText: string = await response.text();

    let concertEvents: concertEvent[] = JSON.parse(responseText);

    return concertEvents;
}

function generateHTML(events: concertEvent[]) {
    events.forEach(event => {
        let interpretValue: string = event.interpret;
        let priceValue: number = Number(event.price);
        const del: HTMLButtonElement = document.createElement("button");
        del.textContent = "delete";
        del.className = "deleteButton";
        del.type = "submit";
        del.addEventListener("click", deleteButtonHandler);

        function deleteButtonHandler(): void {
            newReihe.removeChild(newInterpretElement);
            newReihe.removeChild(newPriceElement);
            newReihe.removeChild(del);
        }

        const newInterpretElement: HTMLTableCellElement = document.createElement("td");
        newInterpretElement.textContent = interpretValue;
        const newPriceElement: HTMLTableCellElement = document.createElement("td");
        newPriceElement.textContent = String(priceValue);
        const newReihe: HTMLTableRowElement = document.createElement("tr");

        showMe.appendChild(newReihe);
        newReihe.appendChild(newInterpretElement);
        newReihe.appendChild(newPriceElement);
        newReihe.appendChild(del);

    });
}