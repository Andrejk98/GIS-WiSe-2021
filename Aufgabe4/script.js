"use strict";
var Aufgabe4;
(function (Aufgabe4) {
    const interpretInput = (document.querySelector("#interpret"));
    const priceInput = (document.querySelector("#price"));
    const enterbutton = (document.querySelector("#enter"));
    function enterEvent(_evt) {
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value);
    }
    enterbutton.addEventListener("click", enterEvent);
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=script.js.map