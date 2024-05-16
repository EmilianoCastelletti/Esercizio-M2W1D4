/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
 */
/* SCRIVI QUI LA TUA RISPOSTA 
-Numeri: valori numerici
-Stringhe: valori di testo e devono essere dichiarate tra virgolette singole (''), doppie ("") o backticks (``)
-Booleani: valore vero o falso
-Array: Un elenco di dati che possono essere di qualsiasi tipo e si dichiara tramite parentesi quadre []
-Undefined: valore non definito
-Null: valore nullo
*/

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
 Un oggetto è un insieme di valori che possono essere di qualsiasi tipo e si dichiara con le parentesi graffe {} 
*/
/* SCRIVI QUI LA TUA RISPOSTA 
Un oggetto è un insieme di dati in formato chiave-valore e si dichiara con le parentesi graffe {}.
All'interno degli oggetti si possono inserire dati di qualsiasi tipologia,altri oggetti e funzioni.*/

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const sum = 12 + 20;
console.log (sum)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12;
console.log(x)

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const name = "Emiliano";
console.log(name)

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const subtraction = 4 - x;
console.log(subtraction)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/
/* SCRIVI QUI LA TUA RISPOSTA */
const name1 = "john";
const name2 = "John";
console.log (name1.toLowerCase() === name2.toLowerCase());
