"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    const interpretInput = (document.querySelector("#interpret"));
    const priceInput = (document.querySelector("#price"));
    const enterbutton = (document.querySelector("#enter"));
    const table = (document.querySelector("table"));
    function enterEvent(_evt) {
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value);
    }
    const tbody = (document.querySelector("tbody"));
    function addRow(_e) {
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
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td><button class="delete">Delete</button></td></tr>`;
    }
    function deleteRow(_e) {
        //const tbody = document.querySelector("tbody").deleteRow(document.getElementById(RowID).rowIndex);
        alert("Gedrückt");
    }
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
    table.addEventListener("click", deleteRow);
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map