let userPurchase = +prompt('TASK_7 Enter purchase amount: ');
let userDiscount = userPurchase;

if (userPurchase >= 200 && userPurchase < 300) {
    userDiscount = userPurchase - (userPurchase * 0.03);
    alert(`With discount you need to pay: ${userDiscount} USD`);
} else if (userPurchase >= 300 && userPurchase < 500) {
    userDiscount = userPurchase - (userPurchase * 0.05);
    alert(`With discount you need to pay: ${userDiscount} USD`);
} else if (userPurchase >= 500) {
    userDiscount = userPurchase - (userPurchase * 0.07);
    alert(`With discount you need to pay: ${userDiscount} USD`);
} else {
    alert('Error')
}