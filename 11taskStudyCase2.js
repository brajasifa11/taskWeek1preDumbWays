let score = [80,45,30,45,70,70,80,90,91,88,80,83]
nilaiMin = score[0];
nilaiMax = 0;
rataRata = 0;

for(i = 0; i < score.length; i++){
  
  if(score[i] < nilaiMin){
    nilaiMin = score[i]; 
  }else if(score[i] > nilaiMax){
    nilaiMax = score[i]
  }
  rataRata = rataRata + score[i] / score.length;
}

console.log(nilaiMin, nilaiMax, rataRata);