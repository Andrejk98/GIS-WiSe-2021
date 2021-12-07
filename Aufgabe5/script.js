"use strict";
var Aufgabe5;
(function (Aufgabe5) {
    const interpretInput = (document.querySelector("#interpret"));
    const priceInput = (document.querySelector("#price"));
    const enterbutton = (document.querySelector("#enter"));
    const tbody = (document.querySelector("tbody"));
    /*
        const saveButton: HTMLButtonElement = <HTMLButtonElement>(
            document.getElementById("save-Button")
        );
    
        const loadButton: HTMLButtonElement = <HTMLButtonElement>(
            document.getElementById("load-button")
        );
    */
    const display = (document.getElementById("display"));
    let interpretArray = [];
    let priceArray = [];
    /*
        interface ConcertEvent {
            interpret: string;
            price: number;
         }
    */
    function Save() {
        console.log("save");
        let already = interpretInput.value + "" + priceInput.value;
        localStorage.setItem("storage-input", already);
    }
    function Load() {
        console.log("Load Button clicked"); // Konsolenausgabe zum Test der Funktion
        let valueFromLocalStorage = localStorage.getItem("storage-input"); //Suche im LocalStorage nach dem Wert mit dem Key; "gis_praktikum_input"
        console.log("aktuelle Wert im Local Storage: " + valueFromLocalStorage); //gebe den aus dem LocalStorage gezogenen Wert in der Konsole aus
        display.textContent = valueFromLocalStorage; //Überschreibe den Inhalt des Display-Elements mit dem aus dem LokalStorage gezogenen Wert.
    }
    function enterEvent(_evt) {
        _evt.preventDefault();
        Save();
        Load();
    }
    function addRow(_e) {
        _e.preventDefault();
        tbody.innerHTML += `<tr><td>${interpretInput.value}</td><td>${priceInput.value}</td><td><button>Delete</button></td></tr>`;
        let allButtons = document.querySelectorAll("button");
        for (const ele of allButtons) {
            ele.addEventListener("click", function () {
                this.parentElement.parentElement.parentElement.removeChild(this.parentElement.parentElement);
            });
        }
    }
    //saveButton.addEventListener("click", saveButtonHandler);
    //loadButton.addEventListener("click", loadButtonHandler);
    enterbutton.addEventListener("click", enterEvent);
    enterbutton.addEventListener("click", addRow);
})(Aufgabe5 || (Aufgabe5 = {}));
//# sourceMappingURL=script.js.map