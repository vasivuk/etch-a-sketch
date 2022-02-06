const container = document.querySelector('.grid-container');

for(let row = 0; row < 4; row++){
    const rowDiv = document.createElement('div');
    rowDiv.classList.add("row");
    container.appendChild(rowDiv);
    for(let col = 0; col < 4; col++){
        const div = document.createElement('div');
        div.classList.add('square');
        rowDiv.appendChild(div);
    }
}
