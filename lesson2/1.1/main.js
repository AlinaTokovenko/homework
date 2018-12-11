var memoryArray = [{
        memory: '32',
        price: '400$'
    },
    {
        memory: '64',
        price: '600$'
    },
    {
        memory: '132',
        price: '800$'
    }
];
var colorArray = [{
        color: 'black',
        image: '<img src="img/black.png">'
    },
    {
        color: 'silver',
        image: '<img src="img/silver.png">'
    },
    {
        color: 'gold',
        image: '<img src="img/gold.png">'
    }
];
var phone = {
    price: '',
    image: ''
};
var tempMemory = null;
var tempColor = null;
outer:
    do {
        if (phone.price === '') {
            do {

                var userMemory = prompt('Выберите память (32, 64, 132)', '');
                if (userMemory === null) {
                    phone.price = 'Bye';
                    break outer;
                } else {
                    tempMemory = getByValue(memoryArray, userMemory, 'memory');
                }
            } while (tempMemory === null);
            phone.price = tempMemory.price;
        }
        var userColor = prompt('Выберите цвет (black, silver, gold)', '');
        if (userColor === null)
            break;
        else
            tempColor = getByValue(colorArray, userColor, 'color');
    } while (tempColor === null);
if (tempColor !== null) {
    phone.image = tempColor.image;
}
document.write(phone.price);
document.write(phone.image);

function getByValue(arr, value, parameterName) {

    for (var i = 0, iLen = arr.length; i < iLen; i++) {

        if (arr[i][parameterName] === value) return arr[i];
    }
    return null;
}