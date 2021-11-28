"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    const interpretInput = (document.querySelector("#interpret"));
    const priceInput = (document.querySelector("#price"));
    const enterbutton = (document.querySelector("#enter"));
    const tbody = (document.querySelector("tbody"));
    const deleteButton = (document.getElementById("delete"));
    function enterEvent(_evt) {
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value);
    }
    function addRow(_e) {
        //let table: HTMLTableSectionElement = <HTMLTableSectionElement> document.querySelector('tbody');
        _e.preventDefault();
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td><button id="delete" onclick="deleteItem()">Delete</button></td></tr>`;
    }
    function deleteRow(_e) {
        //const tbody = document.querySelector("tbody").deleteRow(document.getElementById(RowID).rowIndex);
        alert("Gedrückt");
    }
    function deleteItem() {
        console.log("clicked");
    }
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
    deleteButton.addEventListener("click", deleteRow);
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map