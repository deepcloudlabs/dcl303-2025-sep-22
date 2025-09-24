fetch("https://api.binance.com/api/v3/ticker/price")
    .then(res => res.json())
    .then(tickers => {
        tickers.sort((ticker1, ticker2) => Number(ticker2.price) - Number(ticker1.price));
        for(const {symbol, price} of tickers) {
            console.log(`${symbol}: ${price}`);
        }
    });