class HangMan {
    tentativi = 6;
    word = [];
    const parole = ["cane","gatto","albero","sole","mare","montagna","cielo","nuvola","vento","pioggia","fiore","verde","rosso","blu","giallo","bianco","nero","grigio","rosa","viola","arancione","fragola","banana","ananas","mela","pera","uva","limone","arancia","ciliegia","cocomero","pesca","kiwi","anguria","lampone","mora","melograno","castagna","nocciola","mandorla","noci","noccioline","nocciolina","mandarino","susina","prugna","pesca","fico","dattero","mango","papaya","mandarino","fico","limone","pompelmo","cipolla","aglio","patata","carota","peperone","pomodoro","zucchina","melanzana","sedano","insalata","lattuga","spinaci","broccoli","cavolfiore","cipolla","porro","cetriolo","ravanello","barbabietola","funghi","prezzemolo","basilico","rosmarino","salvia","menta","dragoncello","timo","origano","aglio","cipolla","zafferano","chiodi di garofano","cannella","pepe","zenzero","noce moscata","paprika","curcuma","coriandolo",
      ];
    constructor(keywordsToDisccover){
        this.keywrd = keywordsToDisccover;
        
    }
    inserisciCarattere(lettera)
    {
        let indovinato = false;
        for(let i=0; i < this.keywrd.lenght; i++)
        {
            if(lettera===keyword[i])
            {
                word[i] = lettera;
                indovinato=true;
            }
        }
        if(indovinato)
        {
            console.log("Hai indovinato");
        }
        else
        {
            console.log("Hai sbagliato");
        }
    }
}
