//console.log('prova')

//Impostare una griglia 10x10
//Inserire i numeri:
    //Difficoltà 1 => Tra 1 e 100
    //Difficoltà 2 => Tra 1 e 81
    //Difficoltà 3 => Tra 1 e 49
//L'utente indica un livello di difficoltà in base al quale viene generata una griglia


//Variabili
const options = document.getElementById('options');
const play = document.getElementById('play');
const game = document.getElementById('game');

//Usare una funzione che genera la griglia in base all'opzione
const start = () =>{
    //Nominare la casella
    let square;
    //Nominare la colonna
    let column;

    //Generare le tre casistiche
    switch (options.value){
        case 'easy':
            //Dichiarare numero celle
            square = 100;
            //Dichiarare numero colonne
            column = 10;
            break;
        
        case 'normal':
            //Dichiarare numero celle
            square = 81;
            //Dichiarare numero colonne
            column = 9;
            break;
        case 'crazy':
            //Dichiarare numero celle
            square = 49;
            //Dichiarare numero colonne
            column = 7;
            break;
        default:
            square = 100;
            column = 10;
    }

    //Resettare la pagina alla fine dello swicth
    game.innerHTML = '';

    //Creare il ciclo che genera i numeri e le caselle
    for(let i = 0; i < square; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = `calc(100% / ${column})`;
        box.append(i + 1);
        game.append(box);
    }
}

//Assegnare l'evento al button
play.addEventListener('click',start);

//Generare numeri random(bombe)
function getRandomIntInclusive(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random()*(max - min + 1) +min);
}

//Creare array in cui inserire i numeri (bombe)
const bombs = [];

//Generare numeri randomi da 1 a 16 senza doppioni
do{
    //Assegnare numeri
    const random = getRandomIntInclusive(1,16);
    
    //Se il numero è mancante pushare
    if (!bombs.includes(random)){
        bombs.push(random);
    }
}while (bombs.length < 16);

