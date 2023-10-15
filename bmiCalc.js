
const submitButton = document.getElementById('submit');

const weightUserInput = document.getElementById('weight');
const heightUserInput = document.getElementById('height');

const metric = document.getElementById('metric');
const english= document.getElementById('english');

const bmiResult = document.getElementById('bmiResult');

english.addEventListener('click', function () {
    const cmToFoot = document.getElementById('cm');
    const kgToPounds = document.getElementById('kg');

    if (english.checked){
        cmToFoot.innerText = "FT";
        kgToPounds.innerText = "LB";
    }
})
//1 ft = 0,3048 m
// 1lb = 	0.45359kg
metric.addEventListener('click', function (){
    const footToCm = document.getElementById('cm');
    const poundsToKg = document.getElementById('kg');
    if (metric.checked){
        footToCm.innerText = "CM";
        poundsToKg.innerText = "KG"
    }
})

submitButton.addEventListener('click', function (){
    if (metric.checked){
        const heightInM = heightUserInput.value / 100;
        const bmiCalc = weightUserInput.value / Math.pow(heightInM, 2);
        if (bmiCalc < 18.5){
            bmiResult.innerText = `underweight  ${bmiCalc}`
        }else if (bmiCalc > 18.5 && bmiCalc < 25){
            bmiResult.innerText = `healthy weight  ${bmiCalc}`
        }else if (bmiCalc > 24.9 && bmiCalc < 30){
            bmiResult.innerText = `overweight   ${bmiCalc}`;
        }else if (bmiCalc > 30) {
            bmiResult.innerText = `obesity ${bmiCalc}`
        }

        if (heightUserInput.value  <  46 || heightUserInput.value > 251 || isNaN(heightUserInput.value) || isNaN(weightUserInput.value) || weightUserInput.value < 16 || weightUserInput.value >  400){
            bmiResult.innerText = "invalid";
        }
        console.log(bmiCalc);
        console.log(bmiResult.innerText);
    }else {
        const heightInM = heightUserInput.value / 100;
        const bmiCalc = 703 * ( weightUserInput.value / Math.pow(heightInM, 2) );
        if (bmiCalc < 18.5){
            bmiResult.innerText = `underweight  ${bmiCalc}`
        }else if (bmiCalc > 18.5 && bmiCalc < 25){
            bmiResult.innerText = `healthy weight  ${bmiCalc}`
        }else if (bmiCalc > 24.9 && bmiCalc < 30){
            bmiResult.innerText = `overweight   ${bmiCalc}`;
        }else if (bmiCalc > 30) {
            bmiResult.innerText = `obesity ${bmiCalc}`
        }

        if (heightUserInput.value  <  46 || heightUserInput.value > 251 || isNaN(heightUserInput.value) || isNaN(weightUserInput.value) || weightUserInput.value < 16 || weightUserInput.value >  400){
            bmiResult.innerText = "invalid";
        }
        console.log(bmiCalc);
        console.log(bmiResult.innerText);

    }


})

