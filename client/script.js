console.log("hello")

function click() {
  var ticket = document.getElementById("ticket");
  ticket.classList.toggle('active');
}

$(document).ready( function () {
  $('#table_id').DataTable({
    rowReorder: true,
    // scrollX: 300,
    // scrollY: '200px',
    // scrollCollapse: true,
    "lengthMenu": [[2, 5, 10, -1], [2, 5, 10, "All"]]
    // responsive: true,
    // paging: false

  });
});