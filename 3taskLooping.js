



          //========= Naik 1 Angka ===========//

function satu(angka){
let i = 1;
let naik = []

do {
  naik.push(i);
  i++;
}
while (i <= angka);
return naik.join(' ');
}

console.log(satu(15)); // String

          //========= Naik 1 Angka ===========//

          //========= Kuadrat ===========//

function satu(angka){
  let i = 1;
  let naik = []
  
  do {
    naik.push(i * i);
    i++;
  }
  while (i <= angka);
  return naik.join(' ');
  }
  
  console.log(satu(15)); // String

          //========= Kuadrat ===========//

          //========= Kelipatan ===========//

function kelipatan(input){
  let i = 1;
  let nilaiAwal = 0;
  let tiga = [];

  do {
    i++;
    console.log(tiga, "pertama");
    nilaiAwal += 3;
    tiga.push(nilaiAwal);
  }
  while(i <= input);
  return tiga.join(' ');
}

console.log(kelipatan(20)); //String

          //========= Kelipatan ===========//


