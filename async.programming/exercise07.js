const symbols = require("./symbols.json");
async function app(){
    symbols.sort();
    for (const symbol of symbols) {
        const ticker = await fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`).then(res => res.json())
        console.log(ticker);
    }
}
console.log("Application is just started!");
app().then(()=>{
    console.log("Application is just completed!");
});
