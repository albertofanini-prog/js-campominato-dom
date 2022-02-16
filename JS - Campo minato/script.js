//console.log('prova')

//Impostare una griglia 10x10
//Inserire i numeri:
    //Difficoltà 1 => Tra 1 e 100
    //Difficoltà 2 => Tra 1 e 81
    //Difficoltà 3 => Tra 1 e 49
//L'utente indica un livello di difficoltà in base al quale viene generata una griglia


//Variabili

//Nominare il click del bottone
let play = document.querySelector('.play');

//Nominare i livelli di difficoltà
let difficult = document.getElementById('difficoltà');

//Nominare il contenitore dei numeri
let grid = document.querySelector('.grid');


//Generare i quadrati
// function squareGen(rows, columns){

//     for(let i= 0; i < rows; i++){
//         let square = document.createElement('div');
//         square.classList.add('square');
//         square.append(i+1);
//         grid.appendChild(square);
//     }
// }



//Renderli visibili
    // play.addEventListener('click',()=>{
    //     switch(difficult.value){
    //         case 'easy':
    //             squareGen(100, 10);
    //             break;

    //         case 'medium':
    //             squareGen(81,9);
    //             break;

    //         case 'crazy':
    //             squareGen(49,7);
    //             break;
    //     }

    // })

//Generare la griglia
//Cncellare il contenuto della griglia precedente
    
//Impostare la modalità di gioco
play.addEventListener('click',()=>{

    let rows;
    let columns;

    switch(difficult.value){
        case 'easy':
            squareGen(100, 10);
            //rows = 10;
            //columns = 10;
            break;

        case 'medium':
            squareGen(81,9);
            //rows = 9;
            //columns = 9;
            break;

        case 'crazy':
            squareGen(49,7);
            //rows = 7;
            //columns = 7;
            break;
        default:
            squareGen(100, 10);
            //rows = 10;
            //columns = 10;
        //const squareSize = rows * columns;
        //console.log(rows, columns, squareNumber)

        //squareSize = `calc(100% / ${columns})`
        function squareGen(rows, columns){
            grid.innerHTML= '';
            for(let i= 0; i < rows; i++){
                //Generare il container
                let square = document.createElement('div');
                //Grandezza cella
                //square.style.width = squareSize
                //Gnerare la cella
                square.classList.add('square');
                //Impostare la dimensione della cella
                //square.style.width = squareSize;
                //Aggiungere il contenuto
                square.append(i+1);
                //Appendere la cella alla griglia
                grid.appendChild(square);
            }
        }
    }
})
//Passarla come parametro
//play.addEventListener('click',startGame);

//Unico metodo per sganciare
    //play.removeEventListener('click', startGame);



//Colorare al click
function colora(square){
    wrapper = document.querySelector('grid');
    quadrato = wrapper.querySelector('square');
    for(i=0;i<quadrato.length;i++)
    {
        if(quadrato*square == square)
        {
            document.getElementById(elementi*id).className = ".blue";
        }
    }
}


//Il computer deve generare 16 numeri casuali
    //I numeri delle bombe non possono essere duplicati
//L'user clicca su una cella:
    //Se il numero è presente nella lista dei numeri generati ha calpestato una bomba
        //La cella si colora di rosso e la partita termina
    //Altrimenti la cella cliccata si colora di azzurro e l'user può continuare a cliccare le altre celle
//La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo di n corretti
//Al termine della partita comunicare il punteggio

//Creare array vuuoto per n bombe
let nBomb = [];
//Creare numeri random
function nRandom(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//Creare numeri bombe
