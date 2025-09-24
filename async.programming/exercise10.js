const BINANCE_WSS_URL = "wss://stream.binance.com:9443/ws/btcusdt@trade";
const WebSocket = require("ws");
const wss = new WebSocket(BINANCE_WSS_URL);
wss.on("message", payload => {
    console.log(payload.toString());
})
