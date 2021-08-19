let meterbtn = document.getElementById('meter');
let feetbtn = document.getElementById('feet');
let kgBtn = document.getElementById('kg');
let poundBtn = document.getElementById('pound');



//convert meter
meterbtn.addEventListener('click', function () {
    let input = document.getElementById('inputMf').value;
    document.getElementById('output').value = input / 3.281 + " Meter";
    document.getElementById('inputMf').value = ('');

})
// convert feet
feetbtn.addEventListener('click', function () {
    let input = document.getElementById('inputMf').value;
    //we know 1 meter=3.281
    document.getElementById('output').value = input * 3.281 + " Feet";
    document.getElementById('inputMf').value = ('');
})

// convert kg
kgBtn.addEventListener('click', function () {
    let input = document.getElementById('inputKp').value;
    document.getElementById('outputPK').value = input / 2.205 + 'kg';
})

// convert pound
poundBtn.addEventListener('click', function () {
    let input = document.getElementById('inputKp').value;
    document.getElementById('outputPK').value = input * 2.205 + 'pound';
})



// Age Age Calculator

let ageCalculatorBtn = document.getElementById('AgeCalcultor');

ageCalculatorBtn.addEventListener('click', function () {
    let ageInput = document.getElementById('dob').value;
    // console.log(ageInput);


    //date convert mille second
    let userDate = Date.parse(ageInput);
    let nowDate = Date.now();

    let ageMille = nowDate - userDate;
    // console.log(ageMille);

    let minute = 1000 * 60;
    let hour = minute * 60;
    let day = hour * 24;
    let year = day * 365;

    let yy = Math.round(ageMille / year);
    let month = yy * 12 + 1;
    let days = yy * 365;
    let hours = Math.round(ageMille / hour)
    let minutes = Math.round(ageMille / minute)
    //ageOutput 
    document.getElementById('ageOutput').innerHTML = "Age in years" + yy + "Age in month" + month + "Age in days" + days + "Age in hours" + hours + "Age i minutes" + minutes


})

// calcultor

//all clear data to display
document.getElementById("clear").addEventListener("click", function () {
    document.getElementById("user-input").value = "";
})

// back button
document.getElementById("back-button").addEventListener("click", function () {
    const userInput = document.getElementById("user-input")
    const userInputValue = userInput.value;
    userInput.value = userInputValue.substr(0, userInputValue.length - 1);

})
// value of numbers
const numbers = document.getElementsByClassName("numbers")
for (const number of numbers) {
    number.addEventListener("click", function () {
        const userInput = document.getElementById("user-input");
        userInput.value += number.value;
    })
}

// Calculation all data
document.getElementById("equal").addEventListener("click", function () {
    const display = document.getElementById("user-input");
    const displayValue = eval(display.value);
    display.value = displayValue

    if (displayValue == undefined) {
        display.value = ""
    }

})

// comming soon

let countDate = new Date('Jan 1,2022 00:00:00').getTime();

function newYear() {
    let now = new Date().getTime();
    gap = countDate - now;
    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(gap / (day));
    let h = Math.floor((gap % (day)) / (hour));
    let m = Math.floor((gap % (hour)) / (minute));
    let w = Math.floor((gap % (minute)) / second);
    
    document.getElementById('day').innerHTML = d;
    document.getElementById('hour').innerHTML = h;
    document.getElementById('minute').innerHTML = m;
    document.getElementById('second').innerHTML = w;

}

setInterval(function () {
    newYear()
}, 1000)



/// demo Button

// demoBtn =document.getElementById('asges');
// demoBtn.addEventListener("click",function(){
// console.log('click');
// var hint = document.getElementById('hint');
// if(hint.style.display == 'none'){
//   hint.style.display = 'block';
// }
// else{
//   hint.style.display = 'none';
// }
// })
