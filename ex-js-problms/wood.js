const phones = [
    {name: 'samsung', camera: 200, price: 38000, color: 'silver'},
    {name: 'iphone', camera: 106, price: 88000, color: 'black'},
    {name: 'walton', camera: 70, price: 8000, color: 'red'},
    {name: 'nokia', camera: 100, price: 18000, color: 'silver'},
    {name: 'oppo', camera: 260, price: 78000, color: 'silver'}
];
function bestPhone(phones) {
    let best = phones[0];
    for(let i = 0; i < phones.length; i ++) {
        const element = phones[i];
        if(element.price > best.price) {
            best = element;   
        }
    }
    return best;
}
const brand = bestPhone(phones);
console.log(brand);
