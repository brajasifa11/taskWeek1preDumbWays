function convert(nilai){

  if(nilai >= 86 && nilai <= 100){
    return "A";
  } else if(nilai >= 70 && nilai <= 85){
    return "B";
  } else if(nilai >= 50 && nilai <= 69){
    return "C";
  } else if(nilai >= 30 && nilai <= 49){
    return "D";
  } else if(nilai >= 0 && nilai <= 29){
    return "E";
  } else {
    return "Invalid";
  }
}

console.log(convert(80));