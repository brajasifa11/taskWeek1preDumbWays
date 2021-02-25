//========= Output TYpe Data String ===========//

function balikAngka(nomor) {
  return String(nomor).split('').reverse().join('');
}

console.log(balikAngka(1234));

//======= Output Type Data Number =============//

function balikAngka(nomor) {
  let inputString = String(nomor).split('').reverse().join('');
  return Number(inputString);
}

console.log(balikAngka(1234));