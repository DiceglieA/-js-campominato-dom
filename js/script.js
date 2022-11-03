// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.

let eleGrid = document.querySelector('.grid')
let button = document.getElementById('play')
let difficulty = document.getElementById('difficulty')
button.addEventListener('click', play) 
let score = 0

function bombe() {
    let arrBombs = []
    for (let i = 0; i < 16; i++) {
        let bomb = Math.floor(Math.random() * difficulty.value * difficulty.value)
        arrBombs.push(bomb)
        
    }
return arrBombs
}

function play() {
    eleGrid.innerHTML = ''
    let bombs = bombe()
    for ( let i = 1; i <= difficulty.value * difficulty.value; i++) {
    const eleCell = document.createElement('div')
    eleCell.classList.add('cell')
    eleCell.style.width = "calc(100% / "+difficulty.value+")"
    eleCell.innerHTML = `${i}`
    eleGrid.append(eleCell)

    
    eleCell.addEventListener('click', function () {
        if (bombs.includes(i)){
            i++
            this.classList.toggle('danger')
            alert('hai perso. il tuo punteggio è '+score)
        }   else {
            this.classList.toggle('active')
            score++
       }

    }) 
}
}
// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }

