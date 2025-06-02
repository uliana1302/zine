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
  var y = document.getElementsByClassName('cards');
  var isn = document.getElementsByClassName('isn');
  var est = document.getElementsByClassName('est');
  var net = document.getElementsByClassName('net');

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
      y[i].style.display = "none";
      isn[i].style.display = "none";
      est[i].style.display = "none";
      net[i].style.display = "block";
    } else {
      x[i].style.display = "list-item";
      y[i].style.display = "flex";
      isn[i].style.display = "none";
      est[i].style.display = "block";
      net[i].style.display = "none";
    }
  }
}