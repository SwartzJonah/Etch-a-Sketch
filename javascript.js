//Initializing Starter State
const gridContainer = document.querySelector('#gridContainer');
const resizeBtn = document.querySelector('#resizeBtn');
const colorswapBtn = document.querySelector('#colorswapBtn');
const blackswapBtn = document.querySelector('#blackswapBtn');
const incrementBtn = document.querySelector('#incrementBtn');
const startnewBtn = document.querySelector('#startnewBtn');
const eraseBtn = document.querySelector('#eraseBtn');
const toggleLinesBtn = document.querySelector('#toggleLinesBtn');
let size = 16;
let colorState = 'black';
let grid = true;
createGrid(16);

//functions

//Makes grid and sets style based 
function createGrid(size){    
    for (let i = 1; i < (size * size) + 1; i++){
        let gridPiece = document.createElement('div');
        gridPiece.classList.add('gridPiece');
        //gridPiece.textContent = `${i}`;
        gridContainer.appendChild(gridPiece);
        if (grid === true){
        gridPiece.style.border = '1px solid rgba(0,0,0,0.8)';
        } else if (grid === false){
            gridPiece.style.border = '0px solid rgba(0,0,0,0.8)';
        }
        gridPiece.style.backgroundColor = 'rgba(0,0,0, 0.01)';
        gridPiece.addEventListener('mouseover', function (e) {
            if (colorState == 'black'){
                e.target.style.backgroundColor = `rgba(0,0,0,0.9)`; 
            } else if (colorState == 'color'){
                e.target.style.backgroundColor = colorChooser();
            } else if (colorState == 'white'){
                e.target.style.backgroundColor = 'rgba(0,0,0, 0.01)';
            } else {
                e.target.style.backgroundColor = darken(e.target.style.backgroundColor);
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

function randomOpacity(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function colorChooser(){
    let r = randomNumber(255);
    let g = randomNumber(255);
    let b = randomNumber(255);
    let a = randomOpacity(5,9)/10;
    let rgba = `rgba(${r},${g},${b},${a})`;
    return rgba;    
}


function darken(color){
    let amountGray = (color.slice(-4, -1));
    let newColor =  color.slice(0, -4);
    if (amountGray < 0.9) {
        amountGray = Number(amountGray) + .1;
        amountGray = amountGray.toFixed(1);
        color = `${newColor}${amountGray})`;
        return color;
    } else {
        return color;
    }
    
}

//Button Listeners
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

toggleLinesBtn.addEventListener('click', () => {
    if (grid === true){
        grid = false;
        } else if (grid === false){
            grid = true;
        }
        deleteGrid();
        createGrid(size);
      
})
        
      