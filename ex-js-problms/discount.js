// first 100 ----> 100tk
// 101-200 ----> 90tk
// 200 + -----> 70tk

function ticketPrice(ticket) {
    const firstPrice = 100;
    const secondPrice = 90;
    const therdPrice = 70;
    if(ticket <= 100) {
        const firstCound = ticket * firstPrice;
        return firstCound;
    }
    else if(ticket <= 200) {
        const firstCound = 100 * firstPrice;
        const exter = ticket - 100;
        const secondCound = exter * secondPrice;
        return firstCound + secondCound;
    }
    else if(ticket >= 200) {
        const firstCound = 100 * firstPrice;
        const exter = ticket - 200;
        const secondCound = 100 * secondPrice;
        const therdCound = exter * 70;
        return firstCound + secondCound + therdCound;
    }
}
const price = ticketPrice(250);
console.log(price);