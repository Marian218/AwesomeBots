const discord = require('discord.js'); // Define / Require the discord.js module.
const client = new discord.Client(); // Creating a discord.js client instance (constructor).
// Load HTTP module
const http = require("http");
var express = require('express');
var app = express();
const hostname = "127.0.0.1";
const port = 8000;
client.login("ODUxOYYxMzExMDA0ODUyMjI0.YL_4zQ.sXOPwWVqGrwGchdh6x00SXaH_NQ");
require('discord-buttons')(client)
var disbut = require('discord-buttons')// Requiring discord-buttons and binding it to the initialised client

// Create HTTP server
const server = http.createServer((req, res) => {

    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response body "Hello World"
    res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})

client.on('message', message => {
    console.log(message)
    if (message.content === 'SendMeAButton!') {
        let btn = new disbut.MessageButton()
            .setEmoji('785062885952192512')
            .setStyle('grey')
            .setID('123');

        let btn2 = new disbut.MessageButton()
            .setLabel('Working everything fine!')
            .setStyle('url')
            .setURL('https://npmjs.com/package/discord-buttons');

        let row = new disbut.MessageActionRow()
            .addComponent(btn)
            .addComponent(btn)
            .addComponent(btn)
            .addComponent(btn)

        message.channel.send(`Cos jest nie ok`, { components: [row,row,row,row,row] });
    }
});

client.on('clickButton', async (button) => {
    console.log(button)
    //await button.reply.edit('???');
});