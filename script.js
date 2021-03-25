const container = document.querySelector("#container");

function randomize(number){
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var number = "rgb(" + x + "," + y + "," + z +")";
    return(number);
}

function randomColor(){
    var getColor = document.getElementById("random");
    getColor.style.color = randomize();
}

function blackFont(){
    var changeFont = document.getElementById("random");
    changeFont.style.color = "black";
}

function createGrid(){
    for (var i = 0; i < 55; i++){
        var rows = document.createElement("div");
        rows.className = "rows";
        for (var j = 0; j < 110; j++){
            var columns = document.createElement("div");
            columns.className = "columns";
            columns.addEventListener("mouseover", 
            e => e.target.classList.add("fill-color"));
            rows.appendChild(columns);
        }
        document.getElementById("container").appendChild(rows);
    }
}

container.appendChild(createGrid());