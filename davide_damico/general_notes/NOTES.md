# 23.04

è importante sapere come tenere il branch in cui stiamo lavorando aggiornato con le commit nuove che vengono messe nel main.

Merge commit= crea un commit in più 'commit di merge'

Squash= prende le modifiche , le compatta in un unico commit e lo mette in cima al main

Rebase= prende le modifiche e le mette in cima ,

git commit -m , per poter scrivere premere i , per uscire esc:wq

quando si mette un'a href è bene mettere un path relativo , vuol dire che è sempre bene mettere i ../ etc

tree folders:
lessons/papers
helpers/sheets
website
index.html

comandi utili in casi problematici

stash permette di levare i file dal commit e metterle da parte , quindi nel momento in cui la pr viene approvata , aggiorniamo il main , creiamo un nuovo branch e possiamo riprenderci le modifiche messe da parte. Se si usano file nuovi bisogna prima farli entrare nella staging area , con git add

reset torno indietro ad un commit preciso

# 02.05

è buona norma quando si fa un confronto tra due valori usare === o !== e non == o !=.
Operatori logici: ||

(5 > 2 && 6 > 7) || 1 < 2 , mettendo le parentesi tonde da priorità al primo confronto

Not logico:
const vero = true

!vero (il punto esclamativo restituirà il suo contrario , in questo caso restituisce false)

const test = "test"

!test (la variabile test ha un suo contenuto , quindi lui restituirà false perchè il contrario è che non ha un contenuto)

!!test (resituirà vero , !! è il contrario del contrario)

let sofia = ""

!!sofia (restituirà true perchè il contenuto della variabile di sofia non esiste , perciò con un solo ! restituirà false)

const num = 0

!!num (restituirà false , lo 0 in javascript è false)

const num1 = 1

!!num1 (restituirà true , i numeri da 1 in poi sono true)

let value = null

!!value (restituirà false)

value = undefined

!!value (restituirà false)

!value (restituirà true)

17 / "ciao" (restituirà in console NaN , not a number perchè non può dividere un numero per una stringa)

17 / 0 (restituirà in console infinito)

Arrey:

const array = ['a','b','c']
gli array partono da 0 , quindi 'a' partirà dal numero 0 , 'b' partirà dal numero 1 e 'c' partirà dal numero 2

const value = 'sofia'

array.length
3

array[array.length - 1]
'c'

array[2]
'c'

const array2 = ['a','b','c',['sofia','davide']]

per accedere all'array dentro l'array e prendere 'davide'

array2[3] [1]

const temp = array2[3]

temp[1]
'davide'

const array3 = ['sofia', 'davide']

array.push['giorgio']

array3
['sofia', 'davide', 'giorgio']

const studentiBocciati = ['christian', 'andrea']

const studentiBocciatiDiNuovo = [...studentiBocciati]

[cercare a cosa servono i '...'(chiamato spread operator) nel momento in cui diamo il valore di quella variabile/costante]

## Mentimeter , argomenti da cercare:

possibili domande da colloquio tra l'altro:

concetto di funzione di ordine superiore

arrow function
const nome = (=>)

undefined e null sono sempre intercambiabili? no perchè

javascript è un linguaggio tipizzato dinamicamente? si perchè

js può essere utilizzato per scrivere applicazioni server-side con node.js? si perchè

il metodo arrey.map non modifica l'array originale? si perchè

js supporta la programmazione orientata agli oggetti? si perchè

metodo oggetto classList

element.getAttribute() (prendere gli href di un elemento)

element.setAttribute

highOderFunction

evento js che viene scatenato quando si fa un submit di un form

come si può prevenire l'azione predefinita di un evento in js?

oggetto evento e tutte le funzioni che stanno dentro di esso?

quale proprietà si utilizza per ottenere o impostare l'html interno di un elemento?

ricerca su innerHTML

quale metodo viene utilizzato per aggiungere un nuovo attributo o modificare il valore di un attributo esistente su un elemento?

come si può clonare un nodo in javascript senza clonare i suoi event listeners? come si può clonare con gli eventi listeners?

come si può verificare se un elemento ha una classe specifica in javascript? hasClass
