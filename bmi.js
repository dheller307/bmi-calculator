let meters;
let kilograms;
let bmi;

document.getElementById("custButton").onclick = function(event){
    event.preventDefault();
    const feet = parseFloat(document.getElementById("feet").value);
    const inches = parseFloat(document.getElementById("inches").value);
    const pounds = parseFloat(document.getElementById("pounds").value);
    const totalInches = inches + feet * 12;
    meters = totalInches * 0.0254;
    kilograms = pounds * 0.453592;
    bmi = kilograms/(meters**2);
    bmi = Math.round(bmi*10)/10;
    document.getElementById("output").textContent = `Your Body Mass Index is ${bmi}`;
}
document.getElementById("metButton").onclick = function(event){
    event.preventDefault();
    const meters = parseFloat(document.getElementById("meters").value);
    const kilograms = parseFloat(document.getElementById("kilograms").value);
    bmi = kilograms/(meters**2);
    bmi = Math.round(bmi*10)/10;
    document.getElementById("output2").textContent = `Your Body  Mass Index is ${bmi}`;
}

