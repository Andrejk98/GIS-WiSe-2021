"use strict";
var localStorageübung;
(function (localStorageübung) {
    const inputfield = (document.getElementById("input-Element"));
    const saveButton = (document.getElementById("save-Button"));
    const loadButton = (document.getElementById("load-button"));
    const display = (document.getElementById("display"));
    function saveButtonHandler() {
        console.log("save");
        inputfield.value;
        localStorage.setItem("storage-input", inputfield.value);
    }
    function loadButtonHandler() {
        console.log("load");
        let localValue = localStorage.getItem("storage-input");
        console.log(localValue);
        display.textContent = localValue;
    }
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
})(localStorageübung || (localStorageübung = {}));
//# sourceMappingURL=script.js.map