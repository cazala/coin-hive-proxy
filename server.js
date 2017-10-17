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
wss.on('connection', function connection(ws) {
  console.log('New connection from client\n');
  var chserver = servers[servers.length * Math.random() | 0];
  var chws = new WebSocket(chserver);
  chws.onmessage = function (message) {
    console.log('Message from ' + chserver + ' to client:\n\n', message.data, '\n');
    if (ws.readyState == ws.OPEN)
      ws.send(message.data);
    else {
      console.log('Close inactive/slow connection\n');
      chws.terminate();
      ws.terminate();
    }
  }
  ws.on('message', function (message) {
    console.log('Message from client to ' + chserver + ':\n\n', message, '\n');
    chws.onopen = function (ev) {
      console.log('Connected to ' + chserver + ' 🦄\n');
      chws.send(message);
    }
    if (chws.readyState == chws.OPEN)
      chws.send(message);
  });
  chws.onclose = function () {
    console.log('Disconnected from ' + chserver + ' 💀\n');
  }
  chws.onerror = function (message) {
    console.log('Error with ' + chserver + ' connection 💥\n', message.data);
  }
});

console.log('WebSocket server up and running\n');
