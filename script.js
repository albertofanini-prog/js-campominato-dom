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
function squareGen(rows, columns){

    for(let i= 0; i < 100; i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.append(+1);
        grid.appendChild(square);
    }
}


//Renderli visibili
play.addEventListener('click',() => {
    switch(difficult.value){
        case 'easy':
            squareGen(100, 10);
            break;

        case 'medium':
            squareGen(81,9);
            break;

        case 'crazy':
            squareGen(49,7);
            break;
    }

})

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