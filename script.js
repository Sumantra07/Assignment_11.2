/* function to add rows on click of the Add rows button*/
function addDynamicRows() {
    var table = document.querySelector("#dynamic-table");
    var number = table.rows.length;
    // get the number of rows, so that new row is added at the end//
    var row = table.insertRow(number);
    // inserting columns   
    var col1 = row.insertCell(0);
    var col2 = row.insertCell(1);
    // ifthis is the first row which is going to be added
    if (number === 0) {
        col1.innerText = "Cell " + (number);
        col2.innerText = "Cell " + (number + 1);
    }
    else {
        /* get the last row , and get the value in the cond column, increment it by 1, and
           it should become the cell number for the current cell in new row */
        var val = table.rows[number - 1].cells[1].innerText;
        var num = val.split(" ");
        var n = Number(num[1]);
        n = n + 1;
        col1.innerText = "Cell " + (n);
        col2.innerText = "Cell " + (n + 1);

    }
}
// run the function only when window loads
window.onload = function () {

    var button = document.querySelector("#btn-add");
    button.addEventListener('click', addDynamicRows);

}