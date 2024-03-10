const button = document.getElementById('button-to-create');
const myTable = document.getElementById('my-table');
const inputX = document.getElementById('input-x');
const inputY = document.getElementById('input-y');

let amountTr;
let amountTd;
let newTr;
let newTd;

button.addEventListener('click', () => {
    myTable.innerHTML = '';
    amountTd = +inputY.value;
    amountTr = +inputX.value;
    for(let i = 0; i < amountTr; i++) {
        newTr = document.createElement('tr');
        myTable.appendChild(newTr);
        for(let j = 0; j < amountTd; j++) {
            newTd = document.createElement('td');
            if((i + j) % 2 === 0) {
                newTd.style.background = 'black';
            }
            newTr.appendChild(newTd);
        }
    }
})

myTable.addEventListener('click', (event) => {

    myTable.innerHTML = '';
    let target = event.target;

    for(let i = 0; i < amountTr; i++) {
        newTr = document.createElement('tr');
        myTable.appendChild(newTr);
        for(let j = 0; j < amountTd; j++) {
            newTd = document.createElement('td'); 
            if(target.style.background == 'black') {
                if((i + j) % 2 !== 0) {
                    newTd.style.background = 'black';
                }
            } else {
                if((i + j) % 2 === 0) {
                    newTd.style.background = 'black';
                }
            }
            newTr.appendChild(newTd);
        }
    }
})