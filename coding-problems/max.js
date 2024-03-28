// const maxNum = Math.max(12, 17, 11);
// console.log(maxNum);

/*
1.writ a function that will take 3 numbers will return the max number. first time do it using if-else and second time using Math.max.
*/







/*
2.writ a function that will take 3 parameters will return the max number. first time do it using if-else and second time using Math.max.
*/

function maxNum(num, num1, num2) {
    const maxNumIn = Math.max(num, num1, num2);
    return maxNumIn;
}
const number = maxNum(59, 95, 82);
console.log(number);

// function maxNum(aNum, bNum, cNum) {
//     if(aNum > bNum && aNum > cNum) {
//         return 'aNum';
//     }
//     else if(bNum > aNum && bNum > cNum) {
//         // const bAns = 'bNum';
//         return 'bNum';
//     }
//     else if(cNum > aNum && cNum > bNum) {
//         // const cAns = 'cNum';
//         return 'cNum';
//     }
// }
// const number = maxNum(57, 47, 87);
// console.log(number);


const myArray = [43, 23, 65, 64, 68, 35];
function secondLargest(number) {
    let box = number[0];
    for(let i = 0; i < number.length; i ++) {
        const element = number[i];
        if(element > box) {
            box = element;
        }
    }
    return box;
}
const see = secondLargest(myArray);
console.log(see);


