# curr-convertor

A simple npm package for converting currency.

## Installation

To use this package, you need to install it in your project.

```bash
npm install curr-convertor
  
  ## Usage

Import the `convertCurrency` function and use it in your code. Here's an example:

```javaScript
import convertCurrency from "curr-convertor";

convertCurrency("USD", "INR", 500)
  .then((res) => {
    console.log("Conversion result:", res);
  })
  .catch((err) => {
    console.error("Error during conversion:", err);
  });
```

Replace `"USD"`, `"INR"`, and `500` with your desired source currency, target currency, and amount.
