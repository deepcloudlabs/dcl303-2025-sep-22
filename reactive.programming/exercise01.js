const BINANCE_WSS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const WebSocket = require("ws");
const {fromEvent, map, bufferCount} = require("rxjs");
const wss = new WebSocket(BINANCE_WSS_URL);
const WINDOW_SIZE = 100;
const observable = fromEvent(wss,"message").pipe(
    map( event => {
        const trade = JSON.parse(event.data);
        return Number(trade.p) * Number(trade.q);
    }),
    bufferCount(WINDOW_SIZE),
    map( volumes => volumes.reduce((acc, cur) => acc+cur,0)/WINDOW_SIZE)
)

observable.subscribe(
    average_volumes => console.log("Observer #1:",average_volumes)
);

observable.subscribe(
    async average_volumes => console.log("Observer #2:",average_volumes)
);

observable.subscribe(
    async average_volumes => console.log("Observer #3:",average_volumes)
);

observable.subscribe(
    async average_volumes => console.log("Observer #4:",average_volumes)
);

wss.on("open" , () => console.log("Connected to the binance ws server!"));
wss.on("close" , () => console.log("Disconnected from the binance ws server!"));
wss.on("error" , (error) => console.error("An error has occurred:",error));