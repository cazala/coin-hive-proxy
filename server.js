const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });
var servers = [
  "wss://ws001.coinhive.com/proxy",
  "wss://ws002.coinhive.com/proxy",
  "wss://ws003.coinhive.com/proxy",
  "wss://ws004.coinhive.com/proxy",
  "wss://ws005.coinhive.com/proxy",
  "wss://ws006.coinhive.com/proxy",
  "wss://ws007.coinhive.com/proxy",
  "wss://ws029.coinhive.com/proxy",
  "wss://ws008.coinhive.com/proxy",
  "wss://ws009.coinhive.com/proxy",
  "wss://ws010.coinhive.com/proxy",
  "wss://ws011.coinhive.com/proxy",
  "wss://ws012.coinhive.com/proxy",
  "wss://ws013.coinhive.com/proxy",
  "wss://ws014.coinhive.com/proxy",
  "wss://ws030.coinhive.com/proxy",
  "wss://ws015.coinhive.com/proxy",
  "wss://ws016.coinhive.com/proxy",
  "wss://ws017.coinhive.com/proxy",
  "wss://ws018.coinhive.com/proxy",
  "wss://ws019.coinhive.com/proxy",
  "wss://ws020.coinhive.com/proxy",
  "wss://ws021.coinhive.com/proxy",
  "wss://ws031.coinhive.com/proxy",
  "wss://ws022.coinhive.com/proxy",
  "wss://ws023.coinhive.com/proxy",
  "wss://ws024.coinhive.com/proxy",
  "wss://ws025.coinhive.com/proxy",
  "wss://ws026.coinhive.com/proxy",
  "wss://ws027.coinhive.com/proxy",
  "wss://ws028.coinhive.com/proxy",
  "wss://ws032.coinhive.com/proxy"
];
const server = servers[servers.length * Math.random() | 0];
var wsch = new WebSocket(server);
wsch.onopen = function (ev) {
  console.log('Connected to CoinHive 🦄:', server, '\n');
  wss.on('connection', function connection(ws) {
    console.log('New connection from client\n');
    wsch.onmessage = function (message) {
      console.log('Message from CoinHive to client:\n\n', message.data, '\n');
      ws.send(message.data);
    }
    ws.on('message', function (message) {
      console.log('Message from client to CoinHive:\n\n', message, '\n');
      wsch.send(message);
    });
    wsch.onclose = function () {
      console.log('Disconnected from CoinHive 💀\n');
    }
    wsch.onerror = function (message) {
      console.log('Error with CoinHive connection 💥\n', message.data);
    }
  });
}



console.log('WebSocket server up and running\n');

