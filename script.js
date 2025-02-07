function calculate() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);

    if (!isNaN(inputValue) && inputValue >= 501 && inputValue <= 2000) {
        var result = 1.509 + (0.623 * inputValue) / 1000;
        document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";
        document.getElementById("custoAzoresMadeira").innerText = ""; // Clear secondary cost
    } else if (!isNaN(inputValue) && inputValue >= 251 && inputValue <= 500) {
        var result = 0.139 + (2.684 * inputValue) / 1000;
        document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";
        document.getElementById("custoAzoresMadeira").innerText = "";
    } else if (!isNaN(inputValue) && inputValue >= 101 && inputValue <= 250) {
        var result = 0.191 + (2.134 * inputValue) / 1000;
        document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";
        document.getElementById("custoAzoresMadeira").innerText = "";
    } else if (!isNaN(inputValue) && inputValue <= 100) {
        var result = 0.294 + (1.113 * inputValue) / 1000;
        document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";    
        document.getElementById("custoAzoresMadeira").innerText = "";
    } else if (!isNaN(inputValue) && inputValue > 2000 && inputValue <= 5000) {
        // Round down to the nearest thousand
        inputValue = Math.floor(inputValue / 1000);
        var result2000 = 1.509 + (0.623 * 2000) / 1000;
        var resultAbove2000 = result2000 + ((inputValue - 1) * 1.28);
        var finalResultAbove2000 = resultAbove2000 * 1.23; // Applying 23% VAT

        var resultAzoresMadeira = result2000 + ((inputValue - 1) * 2.83);
        var finalResultAzoresMadeira = resultAzoresMadeira * 1.23; // Same VAT rule

        document.getElementById("custo").innerText = 
            "Custo: " + roundToDecimal(finalResultAbove2000, 2) + " € com IVA (Portugal Continental)";
        
        document.getElementById("custoAzoresMadeira").innerText = 
            "Custo: " + roundToDecimal(finalResultAzoresMadeira, 2) + " € com IVA (Envio para Ilhas Açores e Madeira)";
    } else {
        document.getElementById("custo").innerText = "Valor inválido. Adicione um valor entre 0 a 5000 gramas.";
        document.getElementById("custoAzoresMadeira").innerText = "";
    }
}

function roundToDecimal(value, decimalPlaces) {
    var multiplier = Math.pow(10, decimalPlaces);
    return Math.round(value * multiplier) / multiplier;
}

document.getElementById("inputValue").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculate();
    }
});
