function maxInArray(numbers) {
    // const s = numbers.sort(function(a, b) {
    //     return a - b;
    // })
    // return s;
    
    for(let i = 0; i < numbers.length; i ++) {
        // console.log(numbers[i]);
        for(let j = 0; j < i; j ++) {
            // console.log(numbers[j]);
            if(numbers[i] < numbers[j]) {

                // let temp = numbers[i];
                // // console.log(temp);
                // numbers[i] = numbers[j];
                // numbers[j] = temp;
                [numbers[i],numbers[j]] = [numbers[j],numbers[i]];
            }
        }        
    }
    return numbers;
}
const heights = [32, 10, 38, 84, 11, 23];
const tallest = maxInArray(heights);
console.log(tallest);





function secondLargest(arr) {
    let largest = arr[0];
    let secondLargest = arr[1];
    
    if (secondLargest > largest) {
        // [largest, secondLargest] = [secondLargest, largest];
        // let temp = largest;
        // largest = secondLargest;
        // secondLargest = temp;

    }
    
    for (let i = 2; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest) {
            secondLargest = arr[i];
        }
    }
    
    return secondLargest;
}

let numbers = [22, 32, 41, 25, 36, 27];
console.log(secondLargest(numbers));
