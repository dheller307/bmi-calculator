let meters;
let Kilograms;
let bmi;

document.getElementById("custButton").onclick = function(){
    event.preventDefault();
    const feet = parseFloat(document.getElementById("feet").value);
    const inches = parseFloat(document.getElementById("inches").value);
    const pounds = parseFloat(document.getElementById("pounds").value);
    const totalInches = inches + feet * 12;
    meters = totalInches * 0.0254;
    kilograms = pounds * 0.453592;
    bmi = kilograms/(meters**2);
    document.getElementById("output").textContent = `Your Body Mass Index is ${bmi}`;
}


