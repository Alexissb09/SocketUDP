const dgram = require("dgram");
const client = dgram.createSocket("udp4");

const SERVER_HOST = "localhost";
const SERVER_PORT = 12345;

const message = Buffer.from("Hola, servidor UDP!");

client.send(message, 0, message.length, SERVER_PORT, SERVER_HOST, (err) => {
  if (err) {
    console.error(`Error al enviar el mensaje: ${err}`);
  } else {
    console.log(`Mensaje enviado al servidor: ${message}`);
  }
  client.close();
});
