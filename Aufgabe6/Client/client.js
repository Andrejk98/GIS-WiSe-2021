"use strict";
var Client;
(function (Client) {
    console.log("Client läuft"); //Testausgabe
    const display = (document.getElementById("display"));
    const url = "http://127.0.0.1:3000"; //URL Adresse, auf der der Server aktiv ist.
    const path = "/convertDate"; //Spezifischer Pfad, an den die Anfrage gehen soll.
    const myForm = document.getElementById("myform"); //Referenzieren des Formulars
    const sendButton = document.getElementById("send-button"); //Referenzieren des Send-Buttons
    //EventListener für ein Click-Event aud den sendButton
    sendButton.addEventListener("click", function (evt) {
        evt.preventDefault(); //Vermeiden, dass Event wie gewöhlich ausgeführt wird
        sendForm(); // sendForm-Funktion aufrufen.
    });
    console.log(myForm, sendButton); //Konsole-Log zum testen der HTML-Referenzen
    /*
    wenn wir das "await"-Stichwort in der Funktion verwenden müssen wir diese Funktion als "async" kennzeichnen.
    Auserdem ist der Rückgabewert dann immer vom Typ: Promise;
    */
    async function sendForm() {
        //Vorbereiten der Formulardaten zum Sende-Prozess
        let formData = new FormData(myForm); //Formulardaten mit unserem Formular initialisieren.
        let query = new URLSearchParams(formData); //Get-Parameter vorbereiten
        let urlWithQuery = url + path + "?" + query.toString(); //Formatierung der URL zum Senden an den Server
        /*
        Die QueryURL besteht aus der url selbst,
        aus dem gewünschten Pfad,
        einem Fragezeichen um zu kennzeichnen das jetzt Getparameter angehengt werden
        und der Get-Parametern (query.toString())
        */
        let response = await fetch(urlWithQuery); // Senden der Anfrage und warten auf Antwort
        let responseText = await response.text(); // Warten auf den Response-Text;
        console.log(responseText); // Ausgabe der Server-Antwort in der Konsole
        display.textContent = responseText;
    }
})(Client || (Client = {}));
//# sourceMappingURL=client.js.map