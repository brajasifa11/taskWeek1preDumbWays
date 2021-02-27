function kategori(umur){

  if(umur >= 0 && umur <= 1){
    return `Umur ${umur} tahun adalah Bayi`;
  } else if(umur >= 2 && umur <= 10){
    return `Umur ${umur} tahun adalah Anak - anak`;
  } else if(umur >= 11 && umur <= 19){
    return `Umur ${umur} tahun adalah Remaja`;
  } else if(umur >= 20 && umur <= 60){
    return `Umur ${umur} tahun adalah Dewasa`;
  } else if(umur === 'E'){
    return `Umur ${umur} tahun adalah Lanjut Usia`;
  } else {
    return 'Invalid';
  }
} 

console.log(kategori(3));