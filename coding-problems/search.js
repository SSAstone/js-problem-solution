const lyrics = 'tumi bondhu kala pakhi ami jano ki';
const search = 'Pakhi';
const doesExist = lyrics.includes(search.toLowerCase());
console.log(doesExist);


console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('tumi'));

if(lyrics.indexOf('ami') !== -1) {

}


console.log(lyrics.startsWith('2mi'));

const fileName = 'mypic.png'
console.log(fileName.endsWith('.png'));
