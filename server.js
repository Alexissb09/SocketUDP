const dgram = require("dgram");
const server = dgram.createSocket("udp4");

const PORT = 12345; // Puerto en el que el servidor escuchará

server.on("listening", () => {
  const address = server.address();
  console.log(`Servidor UDP escuchando en ${address.address}:${address.port}`);
});

let totalDataSize = 0;

server.on("message", (message, remote) => {
  const packetSize = message.length;
  totalDataSize += packetSize;
  console.log(`Tamaño del paquete recibido: ${packetSize} bytes`);
  console.log(`Tamaño total de datos acumulados: ${totalDataSize} bytes`);
  console.log(`Recibido: ${message} desde ${remote.address}:${remote.port}`);
});

server.bind(PORT);
