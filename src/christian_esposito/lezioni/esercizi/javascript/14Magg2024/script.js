class HangMan {
    constructor(choseWord) {
        this.choseWord = choseWord.toUpperCase();

    }

    word10 = ["Serendipity","Effimero","Mellifluo","Ineffabile", "Palpitare","Guizzo","Accogliente", " Elementare","Inevitabile", "Affascinante"]
    static randomWorld = ""
    static trueLetter = []
    static count = 0
    static wrongLetter = ""


    random10ForrandomWorld(){
        const randomNumber = Math.floor(Math.random() * this.word10.length)
        this.randomWorld = this.word10[randomNumber]
        console.log("static function",this.randomWorld )
    }


    findWord(letters) {

        if (this.choseWord.toUpperCase().includes(letters.toUpperCase())) {
            for (let i = 0; i < this.choseWord.length; i++) {
                if (letters.toUpperCase() === this.choseWord[i].toUpperCase()) {
                    HangMan.trueLetter[i] = this.choseWord[i].toUpperCase()
                    if (HangMan.trueLetter.join('') === this.choseWord) { console.log("hai Vinto") }
                } else if (HangMan.trueLetter[i] === undefined) {
                    HangMan.trueLetter[i] = "-"
                }
            }
        } else { console.log("Lettera già usata") }
        console.log(HangMan.trueLetter)
    }

    // findRandomWorld(letters){
    //     if (HangMan.randomWorld.toUpperCase().includes(letters.toUpperCase())) {
    //         for (let i = 0; i < this.randomWorld.length; i++) {
    //             if (letters.toUpperCase() === this.randomWorld[i].toUpperCase()) {
    //                 HangMan.trueLetter[i] = this.randomWorld[i].toUpperCase()
    //                 if (HangMan.trueLetter.join('') === this.randomWorld) { console.log("hai Vinto") }
    //             } else if (HangMan.trueLetter[i] === undefined) {
    //                 HangMan.trueLetter[i] = "-"
    //             }
    //         }
    //     } else { console.log("Lettera già usata") }
    //     console.log(HangMan.trueLetter)
    // }

}

const man = new HangMan("gatto")
// man.findWord("t")
// man.findWord("g")
// man.findWord("o")
// man.findWord("u")
// man.findWord("a")
// console.log(man.randomWorld)
// man.random10ForrandomWorld()
// console.log(man.randomWorld)
// man.findRandomWorld("e")



