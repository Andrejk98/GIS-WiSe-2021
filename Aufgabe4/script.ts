namespace Aufgabe4{
    const interpretInput: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#interpret")
    );

    const priceInput: HTMLInputElement = <HTMLInputElement>(
        document.querySelector("#price")
    );

    const enterbutton: HTMLElement = <HTMLElement>(
       document.querySelector("#enter") 
    );

    const tbody: HTMLTableSectionElement = <HTMLTableSectionElement>(
        document.querySelector("tbody")
    );
    
    const deleteButton: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("delete")
    );

    function enterEvent(_evt: Event){
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value)
    }

    function addRow(_e: Event){
        //let table: HTMLTableSectionElement = <HTMLTableSectionElement> document.querySelector('tbody');
        _e.preventDefault();
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td><button id="delete" onclick="deleteItem()">Delete</button></td></tr>`;
    }

    function deleteRow(_e: Event){
        //const tbody = document.querySelector("tbody").deleteRow(document.getElementById(RowID).rowIndex);
        alert("Gedrückt");
    }

    function deleteItem(): void{
        console.log("clicked");
    }
    
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
    deleteButton.addEventListener("click", deleteRow);
}


