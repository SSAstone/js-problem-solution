function bestFriend(friend) {
    let lengthName = friend[0];

    for(let i = 0; i < friend.length; i ++) {
        const element = friend[i];
        if(element.length > lengthName.length) {
            lengthName = element; 
        }
    }
    return lengthName; 
}
const myFriend = ['sajid', 'mamun', 'jubayer bin rased', 'chinku'];
const use = bestFriend(myFriend);
console.log(use);

