const inputBGC = document.querySelector('#bgc')
const inputSize = document.querySelector('#size')
const button = document.querySelector('button')
const circle = document.querySelector('.circle')

button.addEventListener('click', changeValue = () =>{
    const valueColor = inputBGC.value;
    const valueSize = [inputSize.value];
    const qwe = valueSize.slice('/')
    console.log(valueColor, qwe);
})

