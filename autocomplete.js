let places = [
  'Davis',
  'Undergraduate Library',
  'The Quad',
  'The Pit',
  'Bottom of Lenoir',
  'Genome Sciences Cafe',
  'Sitterson Lobby',
  'Sloane Art Library',
  'Phillips Hall',
  'TOPO',
  'Starbucks on Franklin',
  'Kenan Science Library',
  'Wilson Library',
  'Student Union',
]

function autocomplete(inp, arr) {
  let currentItem;
  inp.addEventListener("input", function (e) {
    let x, y, z, val = this.value;
    closeAllLists();

    if (!val) { return false; }

    currentItem = -1;

    x = document.createElement("DIV");
    x.setAttribute("id", this.id + "autocomplete-places");
    x.setAttribute("class", "autocomplete-spots");

    this.parentNode.appendChild(x);

    for (z = 0; z < arr.length; z++) {
      if (arr[z].toUpperCase().indexOf(val.toUpperCase()) > -1) {

        y = document.createElement("DIV");
        y.innerHTML += arr[z];
        y.innerHTML += "<input type='hidden' value='" + arr[z] + "'>";

        y.addEventListener("click", function (e) {
          inp.value = this.getElementsByTagName("input")[0].value;
          closeAllLists();
        });
        x.appendChild(y);
      }
    }
  });

  function closeAllLists(items) {

    let x = document.getElementsByClassName("autocomplete-spots");
    for (let i = 0; i < x.length; i++) {
      if (items != x[i] && items != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }

  document.addEventListener("click", function (clicker) {
    closeAllLists(clicker.target);
  });
}

autocomplete(document.getElementById("theInput"), places);