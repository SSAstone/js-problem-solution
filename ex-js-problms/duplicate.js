const names = ['abul', 'babul', 'kabul', 'abul', 'dabul', 'kabul', 'babul'];
function remove(names) {
    const unique = [];
    for(let i = 0; i < names.length; i ++) {
        const name = names[i];
        if(unique.includes(name) !== true) {
            unique.push(name);
        }
    }
    return unique;
}
const search = remove(names);
console.log(search);