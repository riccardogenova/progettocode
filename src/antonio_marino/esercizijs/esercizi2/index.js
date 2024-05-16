// Al Clic di un bottone, rimuovi un altro elemento specifico dal DOM

const removeTextBtn = document.getElementById('removeText');
const removeP  = document.getElementById('removeP');

removeTextBtn.addEventListener('click',function(){
    removeP.remove();
})

// Al Clic di un bottone, sostituisci un elemento esistente con un nuovo elemento.
const changeElementBtn = document.getElementById('changeElementBtn');
const changeElement  = document.getElementById('changeElement');

function cambioElemento(){

    let newElement = document.createElement('a');
    newElement.textContent = 'sono il nuovo elemento sostituito';
    changeElement.parentNode.replaceChild(newElement, changeElement);
}

changeElementBtn.addEventListener('click',cambioElemento);

// Al clic di un elemento, modifica una proprietà CSS di un elemento.

const paragraphCss = document.getElementById('paragraph');

function changeCss(){
    paragraphCss.style.color = 'green'
}

paragraphCss.addEventListener('click',changeCss);


// In JavaScript (non CSS) cambia il colore di sfondo di un elemento quando il mouse passa sopra

function cambioSfondo(){
    paragraphCss.style.backgroundColor = 'blue'
}

paragraphCss.addEventListener('mouseover',cambioSfondo);

//  cambia l'immagine visualizzata quando l'utente clicca su un bottone.

const changeImgBtn = document.getElementById('changeImgBtn');
const immagine = document.querySelector('img');

function changeImg(){
    immagine.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.sJkLpFJAAMukw7GbLEtyyQHaDt%26pid%3DApi&f=1&ipt=c3cdae9533bb9a06cd2f74ab5067a7606e3d4bb06000a6fa1aad0e3608ef65b4&ipo=images'
}

changeImgBtn.addEventListener('click',changeImg);

// Al Clic di un bottone, aggiungi un nuovo paragrafo prima di un elemento esistente.

const btnAddParagraph = document.getElementById('addParagraph');
const contenitore = document.getElementById('ctn');

function aggiungiParagrafo (){
    let p = document.createElement('p');
    p.textContent= 'mi chiamo messi'
    let primoParagrafo = contenitore.firstChild
    contenitore.insertBefore(p,primoParagrafo)
}

btnAddParagraph.addEventListener('click',aggiungiParagrafo);

// Mostra o nascondi un elemento ogni volta che si clicca su un bottone.

const mostraBtn = document.getElementById('mostraBtn');
const nascondiBtn = document.getElementById('nascondiBtn')
const paragrafoCiao = document.getElementById('ciao');

function mostra(){
    paragrafoCiao.style.display = 'block';
}

mostraBtn.addEventListener('click',mostra);

function nascondi(){
    paragrafoCiao.style.display = 'none';
}

nascondiBtn.addEventListener('click',nascondi);


// Aggiungi un elemento al DOM dopo un ritardo di 5 secondi.

const btnAddText = document.getElementById('btnAddText');
const ctnP = document.getElementById('ctnP');

function addText(){
    let newP = document.createElement('p');
    newP.textContent = 'okkk'
    ctnP.appendChild(newP)
}

btnAddText.addEventListener('click',function(){
    setTimeout(addText,5000)
})

