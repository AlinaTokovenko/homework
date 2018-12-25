let amount = 10;
let area = document.querySelectorAll('.area');
let areaNew = new Array(amount);

for (let i = 0; i < areaNew.length; i++) {
  areaNew[i] = new Array(amount);
  for (let j = 0; j < areaNew[i].length; j++) {
    areaNew[i][j] = 'row = ' + i + '; col = ' + j;
    let el = document.createElement('div');
    el.className = 'square';
    el.setAttribute('id', areaNew[i][j]);
    area[0].appendChild(el);
  }

}

area[0].addEventListener('click', coordinates);

function coordinates(e) {
  alert(e.target.id);
}

