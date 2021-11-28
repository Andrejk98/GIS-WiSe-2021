namespace localStorageübung{
    const inputfield: HTMLInputElement = <HTMLInputElement>(
        document.getElementById("input-Element")
    );

    const saveButton: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("save-Button")
    );

    const loadButton: HTMLButtonElement = <HTMLButtonElement>(
        document.getElementById("load-button")
    );

    const display: HTMLDivElement = <HTMLDivElement>(
        document.getElementById("display")
    );

    function saveButtonHandler(): void{
        console.log("save")
        inputfield.value;
        localStorage.setItem("storage-input", inputfield.value);
    }

    function loadButtonHandler(): void{
        console.log("load")
        let localValue: string = localStorage.getItem("storage-input");
        console.log(localValue);
        display.textContent = localValue;
    }
    
    saveButton.addEventListener("click", saveButtonHandler);
    loadButton.addEventListener("click", loadButtonHandler);
}