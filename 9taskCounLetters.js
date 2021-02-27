function hitungHurufDariKalimat(letter, sentence) {
  let totalLetter = 0;
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === letter) {
      totalLetter++;
    }
  }
  return `total huruf ${letter} sebanyak ${totalLetter} buah`;
}

let letter = 'a';
let sentence = 'saya mau makan nasi ya guys';

console.log(hitungHurufDariKalimat(letter, sentence,));