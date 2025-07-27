const button= document.querySelector('button');
button.addEventListener("click", function(event) {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        alert("Please enter valid weight and height.");
        return;
    }
    
    const bmi = weight / (height * height);
    document.getElementById('bmiResult').innerText = "Result:"+`Your BMI is ${bmi.toFixed(2)}`;
})