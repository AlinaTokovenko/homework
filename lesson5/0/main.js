let areas = document.querySelectorAll('.area');
let clickHandler = function (event) {
    let input = document.querySelectorAll('input')[0].value;
    // console.log(input);
    // console.log(event.offsetX);
    // console.log(event.offsetY);
    let area = this;
    let areaSize = area.offsetWidth;
    if (input < 0 || input > area) {
        alert ('Wrong input size!')
    } else {
        let x = event.offsetX;
    let y = event.offsetY;
    let el = document.createElement('div');
    el.className = 'square';
    el.style.top = y + 'px';
    el.style.left = x + 'px';
    el.style.width = input + 'px';
    el.style.height = input + 'px';
    area.appendChild(el); 
    }
   
};
for (const a of areas) {
    a.addEventListener('click', clickHandler)
}
