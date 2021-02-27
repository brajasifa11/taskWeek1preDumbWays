function apakahPrima(angka) {
  let bagi = 0;
  
  for(let i = 1; i <= angka; i++){
    if (angka % i === 0){
      bagi++;
    } 
  }
  if(bagi == 2){
    console.log(angka, 'adalah bilangan Prima');
  } else {
    console.log(angka, 'adalah bukan bilanngan Prima');
  }
};

apakahPrima(7);