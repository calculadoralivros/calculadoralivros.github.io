function calculate() {
            var inputValue = parseFloat(document.getElementById("inputValue").value);

            if (!isNaN(inputValue) && inputValue >= 501 && inputValue <= 2000) {
                var result = 1.451 + (0.599 * inputValue) / 1000;
                document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";
            } else if (!isNaN(inputValue) && inputValue >= 251 && inputValue <= 500) {
                var result = 0.133 + (2.581 * inputValue) / 1000;
                document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";
            } else if (!isNaN(inputValue) && inputValue >= 101 && inputValue <= 250) {
                var result = 0.183 + (2.052 * inputValue) / 1000;
                document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";
            } else if (!isNaN(inputValue) && inputValue <= 100) {
                var result = 0.282 + (1.070 * inputValue) / 1000;
                document.getElementById("custo").innerText = "Custo: " + roundToDecimal(result, 2) + " €";	
            } else if (!isNaN(inputValue) && inputValue > 2000 && inputValue <= 5000) {
                // Round down to the nearest thousand
                inputValue = Math.floor(inputValue / 1000);
                var result2000 = 1.451 + (0.599 * 2000) / 1000;
                var resultAbove2000 = result2000 + ((inputValue-1) * 1.20);
                var finalResultAbove2000 = resultAbove2000 * 1.23; // Adding 23% tax only for values above 2000
                document.getElementById("custo").innerText = "Custo: " + roundToDecimal(finalResultAbove2000, 2) + " € com IVA";
            } else {
                document.getElementById("custo").innerText = "Valor inválido. Adicione um valor entre 0 a 5000 gramas.";
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
