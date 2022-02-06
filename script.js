const container = document.querySelector('.grid-container');
document.addEventListener('mousedown', () => mouseClicked = true);
document.addEventListener('mouseup', () => mouseClicked = false);

const button = document.querySelector("#btnGrid");
button.addEventListener('click', initGrid);

let mouseClicked = false;

function initGrid(){
    container.innerHTML = '';
    let size = prompt("Please enter the desired size of the grid");
    //TODO set size limit to 100;
    for(let row = 0; row < size; row++){
        const rowDiv = document.createElement('div');
        rowDiv.classList.add("row");
        container.appendChild(rowDiv);
        for(let col = 0; col < size; col++){
            const div = document.createElement('div');
            div.classList.add('square');
            rowDiv.appendChild(div);
            div.addEventListener('mouseover', () => {
                if(mouseClicked){
                    div.classList.add('blackInk');
                }
            });
        }
    }
}

for(let row = 0; row < 16; row++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("row");
    container.appendChild(rowDiv);
    for(let col = 0; col < 16; col++){
        const div = document.createElement('div');
        div.classList.add('square');
        rowDiv.appendChild(div);
        div.addEventListener('mouseout', () => {
            if(mouseClicked){
                div.classList.add('blackInk');
            }        
        });
        div.addEventListener('click', () => {
            if(mouseClicked){
                div.classList.add('blackInk');
            }        
        });
    }
}

