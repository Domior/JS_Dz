const inputs = document.querySelectorAll('input');
const buttonTicket = document.querySelector('.calculateIsLuckyTicket');

const ticketNumber = document.querySelector('#ticket');


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

buttonTicket.addEventListener('click', calculateIsLuckyTicket = () => {

    const ticketValues = ticketNumber.value;
    const splitedTicketValues = ticketValues.split('');

    const firstPart = +splitedTicketValues[0] + +splitedTicketValues[1] + +splitedTicketValues[2];
    const secondPart = +splitedTicketValues[3] + +splitedTicketValues[4] + +splitedTicketValues[5];

    switch (true) {
        case firstPart == secondPart:
            alert(`YES, your ticket is lucky!`);
            clearInputs();
            break;
        case ticketValues.length < 3:
            firstPart = 0;
            alert(`NO, your ticket is not lucky =(
        Good luck next time!`);
            clearInputs();
            break;
        default:
            alert(`NO, your ticket is not lucky =(
        Good luck next time!`);
            break;
    }
    clearInputs();
})

const clearInputs = () => {
    ticketNumber.value = '';
    handleChange();
};

const handleChange = () => {
    for (const input of inputs) {
        if (input.value === "") {
            buttonTicket.style.backgroundColor = '#d35151';
            buttonTicket.setAttribute('disabled', '');
            return;
        }
    }
    buttonTicket.style.backgroundColor = '#7AB893';
    buttonTicket.removeAttribute('disabled');
};

for (const input of inputs) {
    input.onkeydown = input.onkeyup = input.change = handleChange;
}
