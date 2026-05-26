const container = document.querySelector("div");
const resetButton = document.querySelector("button");

resetButton.addEventListener('click', createSquares);

function createSquares(){
    let input = +prompt("Enter Grid Size (Up to 100)");
    let squareCount = input * input;

    container.replaceChildren();

    for (let i = 0; i < squareCount; i++){
        const square = document.createElement("div");
        square.addEventListener('mouseenter', () => square.style.backgroundColor = "blue");
        square.style.width = `calc(100%/${input})`;
        square.style.height = `calc(100%/${input})`;
        container.appendChild(square);
    }
}

function createInitialSquares(){
    for (let i = 0; i < 256; i++){
        const square = document.createElement("div");
        square.addEventListener('mouseenter', () => square.style.backgroundColor = "blue");
        square.style.width = "calc(100%/16)";
        square.style.height = "calc(100%/16)";
        //square.style.border = "2px solid black";
        container.appendChild(square);
    }
}

createInitialSquares();