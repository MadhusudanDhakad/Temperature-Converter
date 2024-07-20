const wrapper = document.querySelector(".container");
const displayScreen = document.querySelector("[data-displayContainer]");
const convertFrom = document.querySelector("[data-convertFrom]");
const convertTo = document.querySelector("[data-convertTo]");
const inputContainer = document.querySelector("[data-inputContainer]");
const firstInput = document.querySelector("[data-selectInput1]");
const secondInput = document.querySelector("[data-selectInput2]");
const convertBtn = document.querySelector("[data-convertBtn]");
const output = document.getElementById("result");

function displayOutput() {
    output.classList.add('active');
    setTimeout(() => {
        output.classList.remove("active");
    }, 2000);
}

function btnClicked() {
    const inputTemp = parseFloat(document.getElementById('from').value);
    const inputUnit = document.querySelector("[data-inputUnit]").value;
    const outputUnit = document.querySelector("[data-outputUnit]").value;

    let strlen = outputUnit.length;
    let result;

    // console.log("condition about to checked...");

    if(inputTemp && inputUnit === '0' && outputUnit === '0'){
        convertTo.value = '';
        output.innerText = "Please select temperature units...";
        displayOutput();
        return;
    }

    if(inputTemp && inputUnit != '0' && outputUnit === '0'){
        convertTo.value = '';
        output.innerText = "Please select temperature units...";
        displayOutput();
        return;
    }

    if(inputTemp && inputUnit === '0' && outputUnit != '0'){
        convertTo.value = '';
        output.innerText = "Please select temperature units...";
        displayOutput();
        return;
    }

    if(!inputTemp && inputUnit != '0' && outputUnit != '0'){
        convertTo.value = "";
        output.innerText = "Please enter a valid Temperature...";
        displayOutput();
        return;
    }

    if(!inputTemp && inputUnit === '0' && outputUnit != '0'){
        convertTo.value = "";
        output.innerText = "Please enter a temperature & select an input unit...";
        displayOutput()
        return;
    }

    if(!inputTemp && inputUnit != '0' && outputUnit === '0'){
        convertTo.value = "";
        output.innerText = "Please enter a temperature & select an output unit...";
        displayOutput()
        return;
    }
    
    if(!inputTemp && inputUnit === '0' && outputUnit === '0'){
        convertTo.value = "";
        output.innerText = "Please enter a temperature & select units...";
        displayOutput()
        return;
    }

    // console.log("condition not checked..");
 

    if(inputTemp && inputUnit != '0' && outputUnit != '0'){

        if(inputUnit === outputUnit) {
            result = inputTemp;
        }
        else if( (inputUnit === 'Celcius') && (outputUnit === 'Fehrenheit')) {
            result = (9/5) * inputTemp + 32;
        }
        else if( (inputUnit === 'Celcius') && (outputUnit === 'Kelvin')) {
            result = inputTemp + 273.15;
        }
        else if( (inputUnit === 'Celcius') && (outputUnit === 'Renkine')) {
            result = (inputTemp + 273.15) * (9/5);
        }
        else if( (inputUnit === 'Celcius') && (outputUnit === 'Newton')) {
            result = inputTemp * 0.33;
        }
        else if( (inputUnit === 'Celcius') && (outputUnit === 'Delisle')) {
            result = ( 100 - inputTemp) * (3/2);
        }
        else if( (inputUnit === 'Fehrenheit') && (outputUnit === 'Celcius')) {
            result = (inputTemp - 32) * (5/9);
        }
        else if( (inputUnit === 'Fehrenheit') && (outputUnit === 'Kelvin')) {
            result = (inputTemp - 32) * (5/9) + 273.15;
        }
        else if( (inputUnit === 'Fehrenheit') && (outputUnit === 'Renkine')) {
            result = (inputTemp + 459.67);
        }
        else if( (inputUnit === 'Fehrenheit') && (outputUnit === 'Newton')) {
            result = (inputTemp - 32) * (5/9) + 0.33;
        }
        else if( (inputUnit === 'Fehrenheit') && (outputUnit === 'Delisle')) {
            result = ( 100 - (inputTemp - 32) * (5/9)) * (3/2);
        }
        else if( (inputUnit === 'Kelvin') && (outputUnit === 'Celcius')) {
            result = inputTemp - 273.15;
        }
        else if( (inputUnit === 'Kelvin') && (outputUnit === 'Fehrenheit')) {
            result = ((inputTemp - 273.15) * (9/5)) + 32;
        }
        else if( (inputUnit === 'Kelvin') && (outputUnit === 'Renkine')) {
            result = inputTemp * (9/5);
        }
        else if( (inputUnit === 'Kelvin') && (outputUnit === 'Newton')) {
            result = (inputTemp - 273.15) * 0.33;
        }
        else if( (inputUnit === 'Kelvin') && (outputUnit === 'Delisle')) {
            result = ( 100 - (inputTemp - 273.15)) * (3/2);
        }
        else if( (inputUnit === 'Renkine') && (outputUnit === 'Celcius')) {
            result = (inputTemp / (9/5)) - 273.15;
        }
        else if( (inputUnit === 'Renkine') && (outputUnit === 'Fehrenheit')) {
            result = (inputTemp - 459.67);
        }
        else if( (inputUnit === 'Renkine') && (outputUnit === 'Kelvin')) {
            result = (inputTemp / (9/5));
        }
        else if( (inputUnit === 'Renkine') && (outputUnit === 'Newton')) {
            result = ((inputTemp - 491.67) / 1.8) * 0.33;
        }
        else if( (inputUnit === 'Renkine') && (outputUnit === 'Delisle')) {
            result = (100 - (inputTemp - 491.67) / 1.8) * (3/2);
        }
        else if( (inputUnit === 'Newton') && (outputUnit === 'Celcius')) {
            result = inputTemp / 0.33;
        }
        else if( (inputUnit === 'Newton') && (outputUnit === 'Fehrenheit')) {
            result = (inputTemp * 3.03 * (9/5)) + 32;
        }
        else if( (inputUnit === 'Newton') && (outputUnit === 'Kelvin')) {
            result = (inputTemp * 3.03) + 273.15;
        }
        else if( (inputUnit === 'Newton') && (outputUnit === 'Renkine')) {
            result = (inputTemp * 3.03 + 273.15) * (9/5);
        }
        
        else if( (inputUnit === 'Newton') && (outputUnit === 'Delisle')) {
            result =(100 - (inputTemp * 3.03)) * (3/2);
        }
        else if( (inputUnit === 'Delisle') && (outputUnit === 'Celcius')) {
            result = 100 - (inputTemp * 2) / 3;
        }
        else if( (inputUnit === 'Delisle') && (outputUnit === 'Fehrenheit')) {
            result = ((100 - ((inputTemp * 2) / 3)) * (9/5)) + 32;
        }
        else if( (inputUnit === 'Delisle') && (outputUnit === 'Kelvin')) {
            result = (100 - ((inputTemp * 2) / 3)) + 273.15;
        }
        else if( (inputUnit === 'Delisle') && (outputUnit === 'Renkine')) {
            result = ((100 - ((inputTemp * 2) / 3)) + 273.15) * (9/5);
        }
        else if( (inputUnit === 'Delisle') && (outputUnit === 'Newton')) {
            result = (100 - ((inputTemp * 2) / 3)) * 0.33;
        }
        
        if(outputUnit === 'Kelvin'){
            convertTo.value = `${result.toFixed(2)} ${outputUnit.charAt(0).toUpperCase()}`;
            return;
        }
        if(outputUnit === 'Delisle'){
            convertTo.value = `${result.toFixed(2)} °${outputUnit.charAt(0).toUpperCase()}e`;
            return;
        }
        convertTo.value = `${result.toFixed(2)} °${outputUnit.charAt(0).toUpperCase()}`;
    }

}


convertBtn.addEventListener("click", btnClicked);


document.addEventListener('DOMContentLoaded', (event) => {
    const moonMode = document.getElementById("moon-img");
    const sunMode = document.getElementById("sun-img");
    const body = document.body;
    const toggleButton = document.getElementById('mode-toggle');

    moonMode.classList.add("active");
    body.classList.add("light-mode");
    wrapper.classList.add("light-mode");
    displayScreen.classList.add("light-mode");
    inputContainer.classList.add("light-mode");
    convertBtn.classList.add("light-mode");

    toggleButton.addEventListener('click', () => {
        if (moonMode.classList.contains("active")) {
            sunMode.classList.add("active");
            body.classList.remove('light-mode');
            wrapper.classList.remove("light-mode");
            displayScreen.classList.remove("light-mode");
            inputContainer.classList.remove("light-mode");
            convertBtn.classList.remove("light-mode");

            body.classList.add('dark-mode');
            wrapper.classList.add("dark-mode");
            displayScreen.classList.add("dark-mode");
            inputContainer.classList.add("dark-mode");
            convertBtn.classList.add("dark-mode");
            moonMode.classList.remove("active");
        } else {
            moonMode.classList.add("active");
            body.classList.remove('dark-mode');
            wrapper.classList.remove("dark-mode");
            displayScreen.classList.remove("dark-mode");
            inputContainer.classList.remove("dark-mode")
            convertBtn.classList.remove("dark-mode");

            body.classList.add('light-mode');
            wrapper.classList.add("light-mode");
            displayScreen.classList.add("light-mode");
            inputContainer.classList.add("light-mode");
            convertBtn.classList.add("light-mode");
            sunMode.classList.remove("active");
        }
    });

    //  Save the user's preference using localStorage
    if (localStorage.getItem('mode') === 'dark') {
        sunMode.classList.add("active");
        body.classList.add('dark-mode');
        wrapper.classList.add("dark-mode");
        displayScreen.classList.add("dark-mode");
        inputContainer.classList.add("dark-mode")
        convertBtn.classList.add("dark-mode");
        moonMode.classList.remove("active");
    } else {
        moonMode.classList.add("active");
        body.classList.add('light-mode');
        wrapper.classList.add("light-mode");
        displayScreen.classList.add("light-mode");
        inputContainer.classList.add("light-mode");
        convertBtn.classList.add("light-mode");
        sunMode.classList.remove("active");
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            localStorage.setItem('mode', 'dark');
        } else {
            localStorage.setItem('mode', 'light');
        }
    });
});
