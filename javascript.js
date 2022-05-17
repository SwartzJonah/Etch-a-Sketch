const gridContainer = document.querySelector('#gridContainer');
const resizeBtn = document.querySelector('#resizeBtn');
let size = 16;

function createGrid(size){
    for (let i = 1; i < (size * size) + 1; i++){
        let gridPiece = document.createElement('div');
        gridPiece.classList.add('gridPiece');
        gridPiece.textContent = `${i}`;
        gridContainer.appendChild(gridPiece);
        gridPiece.addEventListener('mouseover', function (e) {
            e.target.style.background = 'blue';  
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
    deleteGrid();
    size = prompt("Please give a new size");
    createGrid(size);
    //gridContainer.style.grid-template-columns(repeat(size, auto));
});