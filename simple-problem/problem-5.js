function onlyPositive(number) {
    let positive = [];
    for(let i = 0; i < number.length; i ++) {
        const element = number[i];
        // console.log(element);
        if(element < 0) {  
            break;   
        }
        positive.push(element);
    }
    return positive;

}
const num = [34, 54, 12, 64, 55, -45, 45, 64];
const use = onlyPositive(num);
console.log(use);