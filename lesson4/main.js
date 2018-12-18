//ex1
var gen = function (start, step) {
    if (!start) start = 0;
    if (!step) step = 2;
    start -= step;
    return function () {
        return start += step;
    };
};

var take = function (gen, x) {
    var arr = [];
    for (var i = 0; i < x; i++) {
        arr.push(gen());
    }
    return arr;
};
console.log(take(gen(0, 2), 5));

//ex2
var characters = [
    { 'name': 'barney', 'age': 36 },
    { 'name': 'fred', 'age': 40 }
];

function pluck(characters, key) {
    var values = [];
    characters.forEach(element => {
        values.push(element[key]);
    });
    return values;
  }

console.log(pluck(characters, 'age'));
