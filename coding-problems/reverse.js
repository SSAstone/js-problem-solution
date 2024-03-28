// function revers(text) {
//     let reversd = '';
//     for(let i = text.length - 1; i >= 0; i --) {
//         const element = text[i];
//         reversd = reversd + element;
//         console.log(element, reversd);
//     }
//     return reversd;
// }
// const myString = 'i am good boy';
// const myReversd = revers(myString);
// console.log(myReversd);



function revers(text) {
    const words = text.split(' ');
    // console.log(words);
    const result = [];
    for(let i = words.length - 1; i >= 0; i --) {
        const element = words[i]; 
        result.push(element);    
    }
    // console.log(result);
    const reversd = result.join(' ');
    return reversd;
}
const myString = 'i am good boy';
const myReversd = revers(myString);
console.log(myReversd);


// function revers(text) {
//     const box = [];
//     for(let i = text.length - 1; i >= 0; i --) {
//         const element = text[i];
//         // console.log(element);

//         box.push(element);
//     }
//     return box;
// }
// const myString = 'i am good boy';
// const myReversd = revers(myString);
// console.log(myReversd);








