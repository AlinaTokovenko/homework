var memory = prompt('Выберите память', '');
var isMemoryValid = (memory === '32') || (memory === '64') || (memory === '132');

if (memory === '32') {
    document.write('400$');
}
else if (memory === '64') {
    document.write('600$');
}
else if (memory === '132') {
    document.write('800$');
}

var color = isMemoryValid ? prompt('Выберите цвет', '') : '';
if (color === 'black') {
    document.write('<img src="img/black.png">');
}
else if (color === 'silver') {
    document.write('<img src="img/silver.png">');
}
else if (color === 'gold') {
    document.write('<img src="img/gold.png">');
}
