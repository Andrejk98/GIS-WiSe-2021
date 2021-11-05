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
 console.log(events[0][0], events[0][1]); 
 console.log(events[1][0], events[1][1]);
 console.log(events[2][0], events[2][1]);
 console.log(events[3][0], events[3][1]);
 console.log(events[4][0], events[4][1]);
 console.log(events[5][0], events[5][1]);
 console.log(events[6][0], events[6][1]);
 console.log(events[7][0], events[7][1]);
 console.log(events[8][0], events[8][1]);
 console.log(events[9][0], events[9][1]);
 // Lösung c) ...
 
 // Lösung d) ...
 
 // Lösung e) ...
 
 // Lösung f) ...
 
 // Lösung g) ...
 
 // Lösung h) ...
 