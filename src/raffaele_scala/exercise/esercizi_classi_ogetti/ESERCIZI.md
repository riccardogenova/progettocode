<!-- @format -->

Esercizi Semplici:

1. function triplicator(a, b, c){
   return a \* 3
   }

numbers.map(triplicator)

2. function filterNumbers(a, b, c){
   return a % 2 !== 0 && a > 3
   }

numbers.filter(filterNumbers)

3. function firstMinorenne(a, b, c){
   return a.age < 18
   }

people.find(firstMinorenne)

4. function tot(i, a, b, c){
   return i + a
   }

   numbers.reduce(tot, 0)

5. function findAge(a, b, c){
   return a.age > 18 && a.age < 25
   }

people.findIndex(findAge)

6.  function filterAge(a, b, c){
    return a.age > 20
    }
    function names(a, b, c) {
    return a.name
    }
    people.filter(filterAge).map(names)

7.  function alicePurchase(a, b ,c){
    return a.customer === "Alice"
    }
    function aliceTot(i, a, b, c){
    return i + a.price
    }
    purchases.filter(alicePurchase).reduce(aliceTot, 0)

8.  function indexInitial(a, b, c) {
    return a[0] === "B"
    }
    people.findIndex(indexInitial)

9.  function filterInitial(a, b, c){
    return a[0] === "e"
    }
    function lettersTot(i, a, b, c){
    return i + a.length
    }

words.filter(filterInitial).reduce(lettersTot, 0)

10. function radiceQuadrata(a, b, c){
    return Math.sqrt(a)
    }
    function somma(i, a, b, c) {
    return 1 + a
    }

numbers.map(radiceQuadrata).reduce(somma, 0)
