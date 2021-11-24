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

    const table: HTMLElement = <HTMLElement>(
        document.querySelector("table")
    );

    function enterEvent(_evt: Event){
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value)
    }

    const tbody: HTMLTableSectionElement = <HTMLTableSectionElement>(
        document.querySelector("tbody")
    );

    function addRow(_e: Event){
        //let table: HTMLTableSectionElement = <HTMLTableSectionElement> document.querySelector('tbody');
        _e.preventDefault();
        //const tbody = document.querySelector("tbody");
        /*for(let i = 1; i < 1000; i++){
            table.insertRow(i);
        }*/
        /*let newRow = table.insertRow(0);
        let newCell1  = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        newCell1.appendChild(interpretInput);
        newCell2.appendChild(priceInput);*/
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td><button class="delete">Delete</button></td></tr>`
    }

    function deleteRow(){
        //const tbody = document.querySelector("tbody").deleteRow(document.getElementById(RowID).rowIndex);
        
    }
    
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
    table.addEventListener("click", deleteRow);
}


