const inputs = document.querySelectorAll('input');

const sand1 = document.querySelector('#sandPrice1'.value);
const sand2 = document.querySelector('#sandPrice2'.value);
const sand3 = document.querySelector('#sandPrice3'.value);

const capacity1 = document.querySelector('#capacitySand1'.value);
const capacity2 = document.querySelector('#capacitySand2'.value);
const capacity3 = document.querySelector('#capacitySand3'.value);

const buttonSand = document.querySelector('.calculateButtonValueSand');

const priceArray = [sand1, sand2, sand3]
const capacityArray = [capacity1, capacity2, capacity3]


buttonSand.addEventListener('click', calculatePaintCans = () =>{
    alert(priceArray, capacityArray)
})




const handleChange = () => {
    for (const input of inputs) {
        if (input.value === "") {
            buttonSand.style.backgroundColor = 'red';
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