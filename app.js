function abc() {
    console.log ("Test")
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;
    let para   = document.getElementById('para');

    if (weight === "" || height === "") {
        para.style.display = "block";
        para.innerText = "❌ Please enter both weight and height.";
        return;
    }

       // Convert to numbers (optional safety step)
    weight = parseFloat(weight);
    height = parseFloat(height);

    // Calculate BMI
    let bmi = weight / (height * height);
    let bmiRounded = bmi.toFixed(2);

    // Determine BMI category
    let category = "";
    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    // Display result
    para.style.display = "block";
    para.innerText = `✅ Your BMI is ${bmiRounded} (${category})`;
}