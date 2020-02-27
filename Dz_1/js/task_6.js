const userDollars = prompt('TASK_6 Enter amount of USD to convert into EUR: ')
const currencyRatio = 0.910783;

convertCurrency = (userDollars, currencyRatio) => {
    const convertedEuros = userDollars / currencyRatio
    alert(`${userDollars} USD = ${convertedEuros.toFixed(2)} EUR(rate on 27.03.20)`)
}
convertCurrency(userDollars, currencyRatio)