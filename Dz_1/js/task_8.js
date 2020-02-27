const userAmountMoney = prompt('TASK_8 Enter amount money you have(USD): ')
const chocolateBarCost = prompt('Enter const of a one chocolate bar(USD): ')

calculateUserPurchase = (userAmountMoney, chocolateBarCost) => {
    const amountBarsToBuyWithChange = userAmountMoney / chocolateBarCost;
    const completeAmountBarsToBuy = Math.floor(amountBarsToBuyWithChange);
    const changeFromPurchase = (amountBarsToBuyWithChange - completeAmountBarsToBuy) * chocolateBarCost
    
    alert(`${completeAmountBarsToBuy} chocolate bar(s) you can buy. ${changeFromPurchase.toFixed(2)} USD will remain after purshase`)
}
calculateUserPurchase(userAmountMoney, chocolateBarCost)