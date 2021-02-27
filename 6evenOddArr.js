
let arr = [1,2,3,4,5,6,7,8];

function isEven(value) {
  let result = [];

  for(i = 0; i < value.length; i++){
    if(arr[i] % 2 == 0){
      result.push('Genap');
    } else if(arr[i] % 2 !== 0){
      result.push('Ganjil');
    }
  }
  return result.join(',');
}

console.log(isEven(arr));
