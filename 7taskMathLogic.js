function salary(nama, golongan, durasi){

  let gajiGolongan ;

  if (golongan === 'A'){
    gajiGolongan = 1000;
  } else if(golongan === 'C'){
    gajiGolongan = 2000;
  } else if(golongan === 'D'){
    gajiGolongan = 3000;
  } else if(golongan === 'E'){
    gajiGolongan = 4000;
  }

  let gajiBulanan = gajiGolongan * durasi * 30;
  let perHari = durasi * gajiGolongan;
  let lembur = 0;

  if (durasi * 30 > 200){
    lembur = 200 * durasi * 30;
  }

  let totalGaji = gajiBulanan + lembur;

  return `
  Nama: Bapak ${nama},
  Golongan: Golongan ${golongan},
  Gaji Perhari: Rp ${perHari},00
  Gaji Bulanan: Rp ${gajiBulanan},00
  Lembur: Rp ${lembur},00
  Total Keseluruhan: Rp ${totalGaji},00`
}

console.log(salary('Andi', 'A', 8));