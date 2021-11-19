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

    function enterEvent(_evt: Event){
        _evt.preventDefault();
        console.log(interpretInput.value);
        console.log(priceInput.value)
    }
    
    enterbutton.addEventListener("click", enterEvent);
}


