function converterForGrams(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputKilograms').value = (valNum/1000).toFixed(7);
    document.getElementById('inputMilligrams').value = (valNum*1000).toFixed(7);
    document.getElementById('inputMicrograms').value = (valNum*1e+6).toFixed(7);
    document.getElementById('inputPounds').value = (valNum/454).toFixed(7);
    document.getElementById('inputTons').value = (valNum/1e+6).toFixed(7);
};

function converterForKilograms(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputGrams').value = (valNum*1000).toFixed(5);
    document.getElementById('inputMilligrams').value = (valNum*1e+6).toFixed(5);
    document.getElementById('inputMicrograms').value = (valNum*1e+9).toFixed(5);
    document.getElementById('inputPounds').value = (valNum*2.205).toFixed(5);
    document.getElementById('inputTons').value = (valNum/1000).toFixed(5);
};

function converterForMilligrams(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputGrams').value = (valNum/1000).toFixed(5);
    document.getElementById('inputKilograms').value = (valNum/1e+6).toFixed(5);
    document.getElementById('inputMicrograms').value = (valNum*1000).toFixed(5);
    document.getElementById('inputPounds').value = (valNum/453592).toFixed(5);
    document.getElementById('inputTons').value = (valNum/1e+9).toFixed(5);
};

function converterForMicrograms(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputGrams').value = (valNum/1e+6).toFixed(5);
    document.getElementById('inputKilograms').value = (valNum/1e+9).toFixed(5);
    document.getElementById('inputMilligrams').value = (valNum/1000).toFixed(5);
    document.getElementById('inputPounds').value = (valNum/4.536e+8).toFixed(5);
    document.getElementById('inputTons').value = (valNum/1e+12).toFixed(5);
};

function converterForPounds(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputGrams').value = (valNum*454).toFixed(5);
    document.getElementById('inputKilograms').value = (valNum/2.205).toFixed(5);
    document.getElementById('inputMilligrams').value = (valNum*453592).toFixed(5);
    document.getElementById('inputMicrograms').value = (valNum*4.536e+8).toFixed(5);
    document.getElementById('inputTons').value = (valNum/2205).toFixed(5);
};

function converterForTons(valNum){
    valNum = parseFloat(valNum);
    document.getElementById('inputGrams').value = (valNum*1e+6).toFixed(5);
    document.getElementById('inputKilograms').value = (valNum*1000).toFixed(5);
    document.getElementById('inputMilligrams').value = (valNum*1e+9).toFixed(5);
    document.getElementById('inputMicrograms').value = (valNum*1e+12).toFixed(5);
    document.getElementById('inputPounds').value = (valNum*2205).toFixed(5);
};

