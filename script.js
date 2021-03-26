const container = document.querySelector("#container");
const cells = document.createElement("div");
cells.classList.add("cells");
const changeGrid = document.querySelector("#size");
const eraser = document.querySelector("#erase");
const randomColor = document.querySelector("#random");
const blackColor = document.querySelector("#black");
const clearGrid = document.querySelector("#clear");
let numberOfSquares = 40;

randomColor.addEventListener("click", function(){
    const squares = document.querySelectorAll(".cells");
    squares.forEach((cell) =>{
        cell.addEventListener("mouseover", function(){
            var x = Math.floor(Math.random() * 256);
            var y = Math.floor(Math.random() * 256);
            var z = Math.floor(Math.random() * 256);
            color = "rgb(" + x + "," + y + "," + z +")";        
            cell.style.backgroundColor = color;
        })
    });
});

blackColor.addEventListener("click", function(){
    const squares = document.querySelectorAll(".cells");
    squares.forEach((cell) =>{
        cell.addEventListener("mouseover", function(){
            cell.setAttribute("style", "background-color: black");
        });
    });
});

eraser.addEventListener("click", function(){
    const squares = document.querySelectorAll(".cells");
    squares.forEach((cell) =>{
        cell.addEventListener("mouseover", function(){
            cell.setAttribute("style", "background-color: white");
        });
    });
});

function blankGrid(){
  var blank = document.getElementById("container");
  var blank = removeGrid();
  var blank = createGrid();
}

clearGrid.addEventListener("click", blankGrid);

function removeGrid(){
    container.innerHTML = "";
}

function createGrid(){
    for (let i = 0; i < numberOfSquares ** 2; i++){
        container.appendChild(cells.cloneNode());
    }
        const squares = document.querySelectorAll(".cells");
        squares.forEach((cell) =>{
            cell.style.backgroundColor = "white";
            cell.addEventListener("mouseover", function(){
                cell.setAttribute("style", "background-color: black");
            });
        });
    container.setAttribute('style', `grid-template: repeat(${numberOfSquares}, 
        1fr) / repeat(${numberOfSquares}, 1fr);`);
}

changeGrid.addEventListener("click", function(){
    var gridSize = prompt("Please enter a whole number between 1 and 100");
    var num = Math.ceil(gridSize);
    if (gridSize === null){
        return;
    }
    if (num > 100 || num < 1 || Number.isInteger(num) === false){
        alert("Error! You did not enter a whole number between 1 and 100");
        return;
        }
    removeGrid();
    numberOfSquares = gridSize;
    createGrid();
});

createGrid();