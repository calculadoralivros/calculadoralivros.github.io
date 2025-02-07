function calculate() {
    var inputValue = parseFloat(document.getElementById("inputValue").value);

    if (isNaN(inputValue) || inputValue < 0 || inputValue > 5000) {
        updateCostDisplay("Valor inválido. Adicione um valor entre 0 a 5000 gramas.", "");
        return;
    }

    var result;
    var resultAzoresMadeira = "";

    if (inputValue >= 501 && inputValue <= 2000) {
        result = 1.509 + (0.623 * inputValue) / 1000;
    } else if (inputValue >= 251 && inputValue <= 500) {
        result = 0.139 + (2.684 * inputValue) / 1000;
    } else if (inputValue >= 101 && inputValue <= 250) {
        result = 0.191 + (2.134 * inputValue) / 1000;
    } else if (inputValue <= 100) {
        result = 0.294 + (1.113 * inputValue) / 1000;
    } else {
        // Base cost for the first 2000g
        let baseCost = 1.509 + (0.623 * 2000) / 1000; // 2.755€

        // Determine the number of extra 1000g blocks beyond 2000g
        let extraBlocks = Math.floor((inputValue - 2000) / 1000) + 1; 

        // **Mainland calculation**
        let totalBeforeVAT = baseCost + (extraBlocks * 1.28);
        let finalCost = totalBeforeVAT * 1.23;

        // **Azores & Madeira calculation**
        let totalBeforeVATAzoresMadeira = baseCost + (extraBlocks * 2.83);
        let finalCostAzoresMadeira = totalBeforeVATAzoresMadeira * 1.23;

        result = finalCost;
        resultAzoresMadeira = "Envio para ilhas Açores e Madeira: " + roundToDecimal(finalCostAzoresMadeira, 2) + " € com IVA";
    }

    updateCostDisplay("Custo: " + roundToDecimal(result, 2) + " € com IVA", resultAzoresMadeira);
}

function updateCostDisplay(mainMessage, secondaryMessage) {
    document.getElementById("custo").innerText = mainMessage;
    document.getElementById("custoAzoresMadeira").innerText = secondaryMessage;
}

function roundToDecimal(value, decimalPlaces) {
    return Math.round(value * Math.pow(10, decimalPlaces)) / Math.pow(10, decimalPlaces);
}

document.getElementById("inputValue").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        calculate();
    }
});
