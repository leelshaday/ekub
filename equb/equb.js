const row = 1;

const btn = document.getElementById("btn")
btn.addEventListener('click',equibMembers);
const result = document.getElementById('winner');
var btnRandom = document.getElementById('button');


function equibMembers(){
  const nam = document.getElementById('name').value;
  const amo = document.getElementById('amount').value;
  const ag = document.getElementById('age').value;
  const se = document.getElementById('sex').value;
  const dt = document.getElementById('date').value;
  const myTable = document.getElementById("myTable");
  const newRow = myTable.insertRow(row);

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);
  const cell4 = newRow.insertCell(3);
  const cell5 = newRow.insertCell(4);
  

  cell1.innerHTML = nam;
  cell2.innerHTML = amo;
  cell3.innerHTML = ag;
  cell4.innerHTML = se;
  cell5.innerHTML = dt;

  row++;

}
$(document).ready(function () {
  $('#myTable').DataTable();
});


  


