let CelsiusInput=document.querySelector('#Celsius > input')
let FahrenheitInput=document.querySelector('#Fahrenheit > input')
let KelvinInput=document.querySelector('#kelvin > input')

let btn=document.querySelector('.button button')

function roundNumber(number){
    return Math.round(number*100)/100
}
CelsiusInput.addEventListener('input', function(){
         let cTemp=parseFloat(CelsiusInput.value)
         let fTemp=(cTemp*(9/5))+32
         let kTemp=cTemp + 273.15
         FahrenheitInput.value=roundNumber(fTemp)
         KelvinInput.value=roundNumber(kTemp) 
})
FahrenheitInput.addEventListener('input', function(){
    let fTemp=parseFloat(FahrenheitInput.value)
    let cTemp=(fTemp - 32) *(5/9)
    let kTemp=(fTemp - 32) *(5/9) + 273.15
    CelsiusInput.value=roundNumber(cTemp)
    KelvinInput.value=roundNumber(kTemp) 
})
KelvinInput.addEventListener('input', function(){
    let kTemp=parseFloat(KelvinInput.value)
    let cTemp=kTemp - 273.15
    let fTemp=(kTemp - 273.15)*(9/5)+32
    CelsiusInput.value=roundNumber(cTemp)
    FahrenheitInput.value=roundNumber(fTemp) 
})
btn.addEventListener("click", () => {
CelsiusInput.value=" "
FahrenheitInput.value = " "
KelvinInput.value=" "

})
