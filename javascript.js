const gridContainer = document.querySelector('#gridContainer');
const resizeBtn = document.querySelector('#resizeBtn');
let size = 16;

function createGrid(size){    
    for (let i = 1; i < (size * size) + 1; i++){
        let gridPiece = document.createElement('div');
        gridPiece.classList.add('gridPiece');
        //gridPiece.textContent = `${i}`;
        gridContainer.appendChild(gridPiece);
        gridPiece.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';  
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