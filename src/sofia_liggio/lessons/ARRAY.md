# Array: strutture di dati

Le due strutture più importanti in Javascript sono Array e Object. Si tratta di contenitori in cui possiamo inserire variabili e poi farvi riferimento. 
Gli array contengono una sequenza ordinata di elementi e sono utilizzati per memorizzare più valori in una singola variabile, consentendo l'accesso a ciascun elemento tramite un indice.

## Concetti chiave relativi agli array

- **Indice:** Gli elementi sono accessibili tramite un numero intero chiamato indice. Il primo elemento ha indice 0, il secondo ha indice 1 e così via.
- **Dimensione:** La dimensione è il numero di elementi contenuti al suo interno. In JavaScript gli array sono dinamici, possono crescere o ridursi dinamicamente aggiungendo o rimuovendo elementi.
- **Tipo degli elementi:** Possono contenere numeri, stringhe, oggetti, altri array, booleani e così via.
- **Operazioni sugli array:** Supportano varie operazioni comuni, come aggiungere o rimuovere elementi, accedere agli elementi in base all'indice, iterare su tutti gli elementi, ordinare gli elementi e molto altro ancora.

## Proprietà  e metodi 

Gli array hanno diverse "proprietà" (restituiscono un valore) e "metodi" (sono funzioni o azioni) incorporati che permettono di manipolare e interagire con i dati in vari modi.

## Esempi di proprietà 
- **length:** Restituisce il numero di elementi in un array

## Esempi di metodi

- **push():** Aggiunge uno o più elementi alla fine di un array.
- **pop():** Rimuove e restituisce l'ultimo elemento di un array.
- **shift():** Rimuove e restituisce il primo elemento di un array.
- **unshift():** Aggiunge uno o più elementi all'inizio di un array.
- **splice():** Consente di aggiungere, rimuovere o sostituire elementi in un array.
- **concat():** Unisce due o più array e restituisce un nuovo array.
- **slice():** Restituisce una copia superficiale di una porzione di un array in un nuovo array.
- **indexOf():** Restituisce il primo indice al quale un certo elemento può essere trovato nell'array, oppure -1 se l'elemento non è presente.
- **includes():** Determina se un array contiene un certo elemento, restituendo true o false di conseguenza.
- **forEach():** Esegue una funzione su ogni elemento dell'array.


## Metodi array immutabili
Gli array supportano molti metodi che possono essere utilizzati per eseguire operazioni su di essi. Alcuni di questi metodi sono considerati "immutabili", non modificano direttamente l'array originale, ma restituiscono un nuovo array o un nuovo valore basato sulle operazioni eseguite. Questo è utile quando si desidera mantenere l'integrità dell'array originale.

- **map():** Restituisce un nuovo array applicando una funzione a ciascun elemento dell'array originale.
- **filter():** Restituisce un nuovo array contenente solo gli elementi che soddisfano una determinata condizione.
- **concat():** Unisce due o più array e restituisce un nuovo array.
- **slice():** Restituisce una parte di un array, senza modificarlo.
- **reduce():** Applica una funzione riduttiva a ciascun elemento dell'array, restituendo un singolo valore risultante.
- **find():** Restituisce il primo elemento nell'array che soddisfa il test implementato dalla funzione fornita. Altrimenti restituisce undefined.
- **findIndex():** Restituisce l'indice del primo elemento nell'array che soddisfa il test implementato dalla funzione fornita. Altrimenti restituisce -1. 
- **includes():** Determina se un array contiene un certo elemento, restituendo true o false di conseguenza. 
- **join():** Unisce tutti gli elementi di un array in una stringa e restituisce questa stringa.
- **every():** Verifica se tutti gli elementi dell'array soddisfano il test implementato dalla funzione fornita.
- **some():** Verifica se almeno un elemento dell'array soddisfa il test implementato dalla funzione fornita.
 

