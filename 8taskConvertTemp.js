function converTemp(degrees, temperature, converTo) {
  
  if(temperature === 'Celcius'){
    if(converTo === 'Kelvin'){
      return degrees + 273.15;
    } else if(converTo === 'Fahrenheit'){
      return (degrees * 9/5) + 32;
    } else if(converTo === 'Reamur'){
      return degrees * 0.8;
    } else{
      return degrees
    }

  } else if(temperature === 'Reamur'){
    if(converTo === 'Kelvin'){
      return degrees * 1.25 + 273.15;
    } else if(converTo === 'Fahrenheit'){
      return degrees * 2.25 + 32; 
    } else if(converTo === 'Celcius'){
      return degrees * 1.25;
    } else{
      return degrees;
    }

  } else if(temperature === 'Kelvin'){
    if(converTo === 'Fahrenheit'){
      return (degrees - 273.15) * 9/5 + 32;
    } else if(converTo === 'Reamur'){
      return (degrees - 273.15) * 0.8;
    } else if(converTo === 'Celcius'){
      return degrees - 273.15;
    } else{
      return degrees;
    }

  } else if(temperature === 'Fahrenheit'){
    if(converTo === 'Kelvin'){
      return (degrees + 459.67) / 1.8;
    } else if(converTo === 'Celcius'){
      return (degrees - 32) / 1.8;
    } else if(converTo === 'Reamur'){
      return (degrees - 32) / 2.25;
    } else {
      return degrees;
    }
  }
}

console.log(converTemp(2, 'Celcius', 'Reamur'));
console.log(converTemp(2, 'Reamur', 'Fahrenheit'));
console.log(converTemp(2, 'Kelvin', 'Celcius'));
console.log(converTemp(2, 'Fahrenheit', 'Kelvin'));
console.log(converTemp(2, 'Celcius', 'Celcius'));