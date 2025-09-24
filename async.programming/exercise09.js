const symbols = require("./symbols.json");
async function application(){
    symbols.sort();
    let promises = [];
    for (const symbol of symbols.slice(0,1_000)) {
        const promise = fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
            .then(res => res.json());
        promises.push(promise);
    }
    const tickers = await Promise.all(promises);
    for(const {symbol,price} of tickers) {
        console.log(symbol, price);
    }
}
console.log("Application is just started!");
application().then(()=> console.log("Application is just completed!"));
