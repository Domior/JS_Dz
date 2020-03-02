const inputs = document.querySelectorAll('input');
const buttonSand = document.querySelector('.calculateButtonValueSand');

const sand1 = document.querySelector('#sandPrice1');
const sand2 = document.querySelector('#sandPrice2');
const sand3 = document.querySelector('#sandPrice3');

const capacity1 = document.querySelector('#capacitySand1');
const capacity2 = document.querySelector('#capacitySand2');
const capacity3 = document.querySelector('#capacitySand3');


function validate(evt) {
    var theEvent = evt || window.event;
    var key = theEvent.keyCode || theEvent.which;
    key = String.fromCharCode(key);
    var regex = /[0-9]|\./;
    if (!regex.test(key)) {
        theEvent.returnValue = false;
        if (theEvent.preventDefault) theEvent.preventDefault();
    }
}

buttonSand.addEventListener('click', calculatePaintCans = () =>{
    const priceArray = [+sand1.value, +sand2.value, +sand3.value].sort((a, b) => a - b);
    const capacityArray = [+capacity1.value, +capacity2.value, +capacity3.value].sort((a, b) => a - b);

    const fisrtValue = priceArray[0] * capacityArray[0];
    const secondValue = priceArray[1] * capacityArray[1];
    const thirdValue = priceArray[2] * capacityArray[2];
    
    const sortedValues = [priceArray[0] * capacityArray[0], priceArray[1] * capacityArray[1], priceArray[2] * capacityArray[2]].sort((a, b) => a - b);
    const resultValues = sortedValues[0] + sortedValues[1] + sortedValues[2];

    switch (true) {
        case sand1.value > 100 || sand2.value > 100 || sand3.value > 100 || capacity1.value > 100 || capacity2.value > 100 || capacity3.value > 100:
            alert(`Some values are too high, check them and enter the correct ones`);
            clearInputs();
            break;
        
        default:
            alert(`You can get ${resultValues} USD if you fill the containers best.`);
            break;
    }
    clearInputs();
})


const clearInputs = () => {
    sand1.value = '';
    sand2.value = '';
    sand3.value = '';
    capacity1.value = '';
    capacity2.value = '';
    capacity3.value = '';
    handleChange();
};

const handleChange = () => {
    for (const input of inputs) {
        if (input.value === "") {
            buttonSand.style.backgroundColor = '#d35151';
            buttonSand.setAttribute('disabled', '');
            return;
        }
    }
    buttonSand.style.backgroundColor = '#7AB893';
    buttonSand.removeAttribute('disabled');
};

for (const input of inputs) {
    input.onkeydown = input.onkeyup = input.change = handleChange;
}