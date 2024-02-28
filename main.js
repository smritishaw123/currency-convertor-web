const fromAmount = document.getElementById("from-amount");
const fromCurrency = document.getElementById("from-currency");
const toAmount = document.getElementById("to-amount");
const toCurrency = document.getElementById("to-currency");
const convertBtn = document.getElementById("convert-btn");

convertBtn.addEventListener("click", function() {
  const fromValue = parseFloat(fromAmount.value);
  const from = fromCurrency.value;
  const to = toCurrency.value;

  // Predefined conversion rates (assuming a fixed rate for simplicity)
  const conversionRates = {
      "USD_EUR": 0.95,
      "EUR_USD": 1.05,
      "USD_JPY": 114.00,
      "JPY_USD": 0.0088,
      "EUR_JPY": 120.00,
      "JPY_EUR": 0.0083
  };

  const conversionKey = `<span class="math-inline">\{from\}\_</span>{to}`;
  const reverseConversionKey = `<span class="math-inline">\{to\}\_</span>{from}`;

  let convertedAmount;

  // Check if a direct conversion rate exists
  if (conversionRates.hasOwnProperty(conversionKey)) {
      convertedAmount = fromValue * conversionRates[conversionKey];
  } else if (conversionRates.hasOwnProperty(reverseConversionKey)) {
      // If not, calculate using the reverse rate and invert
      convertedAmount = (fromValue / conversionRates[reverseConversionKey]).toFixed(2);
  } else {
      convertedAmount = "Unsupported conversion";
  }
  
  to