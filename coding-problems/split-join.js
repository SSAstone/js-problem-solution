const lyrics = 'tumi bondhu. kala pakhi. ami jano ki';
const parts = lyrics.split(' ');
const partsDot = lyrics.split('.');   
const partsChars = lyrics.split('');

const partial = lyrics.slice(2, 11);   
const partial2 = lyrics.substring(2, 11);


console.log(parts, partsDot, partsChars, partial, partial2);

const lines = [
    'tumi bondhu',
    'kala pakhi',
    'ami jano ki'
];
const newSong = lines.join('; ');
console.log(newSong);