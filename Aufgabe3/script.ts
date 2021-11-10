// -- [Aufgabe 1]

/**
 * @var {number} age: Bitte anstatt der 24 dein Alter eintragen
 */
 let age: number = 23;

 /**
  * @var {string} firstName: Bitte anstatt 'Max' deinen Vornamen eintragen
  */
 let firstName: string = `Andrej`;
 
 function func1(age: number): number {
   return 2021 - age;
 }
 
 let output: string = func2(firstName);
 
 function func3(meal?: string): string {
   console.log(`Ich esse gerne ${meal || "Sushi"}.`);
   return func1(age) > 1995
     ? `Ich gehöre zur Generation Z`
     : `Ich gehöre zur Generation Y`;
 }
 
 console.log(output);
 
 function func2(name: string): string {
   console.log(`Ich heiße ${name}.`);
   return func3();
 }

 /* -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 1 EINTRAGEN
  Es wird erst der Name ausgegeben dann was man gerne isst und zuletzt zu welcher Generation man gehört
  */
 
 // -- [Aufgabe 2]
 
 let events: any[][] = [
   ["Mark Knopfler", 10.1],
   ["Pink Floyd", 15.9],
   ["Metallica", 20.1],
   ["Michael Bublé", 11.1],
   ["Dire Straits", 12.2],
   ["Mariah Carey", 1.1],
   ["Cat Stevens", 12.99],
   ["Mark Forster", 2.1],
   ["Helene Fischer", 3.1],
   ["Bee Gees", 25.2],
 ];
 
 // -- HIER BITTE IHRE LÖSUNG ZUR AUFGABE 2 EINTRAGEN
 
 // Lösung a) ...
 console.log(events.length);
 // Lösung b) ...
 for(let i = 0; i < events.length; i++){
    for(let j = 0; j < events[i].length; j++){
        console.log(events[i][j])
    }
 }
 // Lösung c) ...

 // Lösung d) ...
 let künstler: any[][] = [
  ["Mark Knopfler"],
  ["Pink Floyd"],
  ["Metallica"],
  ["Michael Bublé"],
  ["Dire Straits"],
  ["Mariah Carey"],
  ["Cat Stevens"],
  ["Mark Forster"],
  ["Helene Fischer"],
  ["Bee Gees"],
 ];
 function findEvent(künstlername: String, künstler: any[]) {
  let elementFound = false;
  for (let i = 0; i < künstler.length; i++) {
      if (künstler[i] === künstlername) {
          console.log("true")
          return true;
      }
      /*
      else{
        console.log("false")
      }*/
  } 
  return elementFound;
 }
 findEvent("Pink Floyd", künstler)
 // Lösung e) ...
  let fact: number = 1;
  let num: number = 5;
  function factorial(){ 
    while(num >1) { 
    fact = fact * num; 
    num--;   
    console.log("The factorial  is "+ fact);
    }
  } 
  factorial();
 // Lösung f) ...
 for (let i: number = 1; i <= 100; i++)  {
    if (i % 3 == 0) {
       console.log(i);
    }
  }
 // Lösung g) ...
  class ConcertEvent{
    interpret: string;
    price: number;

    constructor(interpret: string, price: number) {
      this.interpret = interpret;
      this.price = price;
    }
    
    show() {
      console.log(this.interpret,this.price); 
    }
  }
  let c: ConcertEvent = new ConcertEvent("Sido", 120);
  c.show();
 // Lösung h) ...
 let Concert:any[10] = new Array;
 
 Concert[0] = new ConcertEvent("Mark Knopfler", 10.1);
 Concert[1] = new ConcertEvent("Pink Floyd", 15.9);
 Concert[2] = new ConcertEvent("Metallica", 20.1);
 Concert[3] = new ConcertEvent("Michael Bublé", 11.1);
 Concert[4] = new ConcertEvent("Dire Straits", 12.2);
 Concert[5] = new ConcertEvent("Mariah Carey", 1.1);
 Concert[6] = new ConcertEvent("Cat Stevens", 12.99);
 Concert[7] = new ConcertEvent("Mark Forster", 2.1);
 Concert[8] = new ConcertEvent("Helene Fischer", 3.1);
 Concert[9] = new ConcertEvent("Bee Gees", 25.2);

 for(let i = 0;i<Concert.length;i++) { 
   console.log(Concert[i]) 
 }
