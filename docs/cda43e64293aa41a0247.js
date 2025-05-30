function searchClick() {
  document.getElementById("listAll").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.searchbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-list");
    var i;

    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];

      if (!openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function search() {
  var input = document.getElementById('searchbar').value;
  input = input.toLowerCase();
  var x = document.getElementsByClassName('materials');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}