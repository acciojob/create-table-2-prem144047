function createTable() {
    //Write your code here
    let rows = prompt("Input number of rows");
    let columns = prompt("Input number of columns");
    
    // Validate inputs
    if (isNaN(rows) || isNaN(columns) || rows <= 0 || columns <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    rows = parseInt(rows);
    columns = parseInt(columns);
    
    // Get the table element
    const table = document.getElementById("myTable");
    
    // Clear existing table content if necessary
    table.innerHTML = "";

    // Create rows and columns
    for (let i = 0; i < rows; i++) {
        const tr = document.createElement("tr");
        for (let j = 0; j < columns; j++) {
            const td = document.createElement("td");
            td.innerText = `Row-${i} Column-${j}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
