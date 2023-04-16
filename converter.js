const celsiusEl = document.getElementById('celcius');
const fahrenheitEl = document.getElementById('fahrenheit');
const kelvinEl = document.getElementById('kelvin');




function computeTemp(event){
    const currentValue = +event.target.value;
    // alert("burr");
    // alert(event.target.name)
    switch (event.target.name) {                                                                           ////////////////////////switch ke andr nhi jaa rha 
        case "celsius":
           
            kelvinEl.value = (currentValue + 273.15).toFixed(2);
            fahrenheitEl.value = (currentValue *1.8 + 32).toFixed(2);
            break;
                                                                                                             /////////////////////////////Switch ke andr nhi jaa rha
            case "fahrenheit":
                
            celsiusEl.value = ((currentValue-32) / 1.8).toFixed(2);
            fahrenheitEl.value = ((currentValue -32) /1.8+237.32).toFixed(2);
            break;
            case "kelvin":
                
                celsiusEl.value=(currentValue-273.32).toFixed(2);
                fahrenheitEl.value=((currentValue-273.32)*1.8+32).toFixed(2);
                break;
    
        default:
            break;
    }
}