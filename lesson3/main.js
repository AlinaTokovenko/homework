function Calculator() {
    var methods = {
        '+': function (a, b) {
            return a + b;
        },
        '-': function (a, b) {
            return a - b;
        },
        '*': function (a, b) {
            return a * b;
        },
        '/': function (a, b) {
            return a / b;
        }
    };
    this.calculate = function (x, y, z) {
        var number1 = parseInt(x, 10);
        var number2 = parseInt(z, 10);
        if (!methods[y] || isNaN(number1) || isNaN(number2)) {
            alert('Неправильно введенные данные');
            return NaN;
        }
        return methods[y](number1, number2);
    };

}

var calc = new Calculator();
var result = NaN;
var isCanceled = false;
while (isNaN(result)) {
    var input1 = prompt('Введите первое число', '');
    if (input1 === null) {
        isCanceled = true;
        break;
    }
    var input2 = prompt('Введите знак', '');
    if (input2 === null) {
        isCanceled = true;
        break;
    }
    var input3 = prompt('Введите второе число', '');
    if (input3 === null) {
        isCanceled = true;
        break;
    }
    var result = calc.calculate(input1, input2, input3);
}

if (isCanceled) {
    document.write('<h1>Пока</h1>');
} else {
    document.write(result);
}