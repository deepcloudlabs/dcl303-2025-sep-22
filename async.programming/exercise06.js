const symbols = require("./symbols.json");
symbols.sort();
console.log("Application is just started!");
for (const symbol of symbols) {
    fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
        .then(res => res.json())
        .then(ticker => {
            console.log(ticker);
        });
}
console.log("Application is just completed!");
