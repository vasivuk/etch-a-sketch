const container = document.querySelector('.grid-container');

const button = document.querySelector("#btnGrid");
button.addEventListener('click', initGrid);

function initGrid(){
    let size = prompt("Please enter the desired size of the grid");
    for(let row = 0; row < size; row++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add("row");
        container.appendChild(rowDiv);
        for(let col = 0; col < size; col++){
            const div = document.createElement('div');
            div.classList.add('square');
            rowDiv.appendChild(div);
        }
    }
}

