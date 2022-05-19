const gridContainer = document.querySelector('#gridContainer');
const resizeBtn = document.querySelector('#resizeBtn');
const colorswapBtn = document.querySelector('#colorswapBtn');
const blackswapBtn = document.querySelector('#blackswapBtn');
const incrementBtn = document.querySelector('#incrementBtn');
const startnewBtn = document.querySelector('#startnewBtn');
const eraseBtn = document.querySelector('#eraseBtn');
let size = 16;
let colorState = 'black';

function createGrid(size){    
    for (let i = 1; i < (size * size) + 1; i++){
        let gridPiece = document.createElement('div');
        gridPiece.classList.add('gridPiece');
        //gridPiece.textContent = `${i}`;
        gridContainer.appendChild(gridPiece);
        gridPiece.addEventListener('mouseover', function (e) {
            if (colorState == 'black'){
                e.target.style.background = 'black'; 
            } else if (colorState == 'color'){
                e.target.style.background = colorChooser();
            } else if (colorState == 'white'){
                e.target.style.background = 'white';
            } else {
                e.target.style.background = 'black';
            }
        });
    }
}

function deleteGrid(){
    const grids = gridContainer.querySelectorAll(`div`);
    grids.forEach(div => {
        div.remove();
    }
        )

}
function randomNumber(max){
   return Math.floor(Math.random() * max);
}

function colorChooser(){
    let r = randomNumber(255);
    let g = randomNumber(255);
    let b = randomNumber(255);
    let rgb = `rgb(${r},${g},${b})`;
    return rgb;    
}

createGrid(16);

resizeBtn.addEventListener('click', () => {
    size = prompt("Please give a new size");
    size =  parseInt(size);
    if (size > 100){
        return alert('please input a number less then 100');
    } else if (isNaN(size)){
        return alert('please input a number');
    } else {
    deleteGrid();
    createGrid(size);
    document.querySelector('#gridContainer').style.gridTemplateColumns = `repeat(${size}, auto)`;
    }
});

colorswapBtn.addEventListener('click', () => {
    colorState = 'color';
})

blackswapBtn.addEventListener('click', () => {
    colorState = 'black';
})

eraseBtn.addEventListener('click', () => {
    colorState = 'white';
})

incrementBtn.addEventListener('click', () => {
    colorState = 'increment';
})

startnewBtn.addEventListener('click', () => {
    deleteGrid();
    createGrid(size);
})
        
      