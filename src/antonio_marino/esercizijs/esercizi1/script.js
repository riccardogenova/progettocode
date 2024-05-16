
// //  Modifica lo stile di un elemento tramite JavaScript. Scrivi una funzione
//  in JavaScript che modifica il colore e la dimensione del testo di un paragrafo quando l'utente passa il mouse sopra.
const paragrafo = document.getElementById('ParagrafoDaColorare')

function cambiaTesto(){
    paragrafo.style.color='red';
    paragrafo.style.fontSize ='30px';
}

paragrafo.addEventListener('mouseover',cambiaTesto)

function testoNormale(){
    paragrafo.style.color='';
    paragrafo.style.fontSize ='';
}

paragrafo.addEventListener('mouseout',testoNormale)



// Cambia lo sfondo di una pagina. Crea un dropdown con diverse opzioni di colore.
// Quando un'opzione viene selezionata, cambia il colore di sfondo della pagina usando JavaScript.

const cambiaColore = document.getElementById('cambiaColore');


function changeColor(){
document.body.style.backgroundColor = cambiaColore.value
}

cambiaColore.addEventListener('change',changeColor)


//  Al Clic, cambia il colore del testo di un paragrafo in rosso.

const paragrafoRed = document.getElementById('paragrafoRosso');

function paragrafoRosso(){
    paragrafoRed.style.color='red'
}

paragrafoRed.addEventListener('click',paragrafoRosso)



// Nascondi un elemento quando viene cliccato.
const paragrafoHidden = document.getElementById('paragrafoDaNascondere');

function paragrafoCheSiNasconde(){
    paragrafoHidden.style.display='none'
}

paragrafoHidden.addEventListener('click',paragrafoCheSiNasconde)



// Al Clic, aggiungi un nuovo paragrafo al div esistente.

const divParagrafo = document.getElementById('divCheAggiungeUnParagrafo');
const aggiungoTesto = document.getElementById('addText');

aggiungoTesto.addEventListener('click',function(){

    let nuovoParagrafo = document.createElement('p');
    nuovoParagrafo.textContent='ciao, sono il nuovo paragrafo'
    divParagrafo.appendChild(nuovoParagrafo)

})

// Al Click, cambia il testo di un elemento specifico e  aggiungi una classe CSS a un elemento

const cambioTesto = document.getElementById('cambiaTesto');

cambioTesto.addEventListener('click',function(){
    cambioTesto.textContent='testo cambiato'
    cambioTesto.classList.add('classeAggiunta')
})



