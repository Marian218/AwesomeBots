const discord = require('discord.js'); // Define / Require the discord.js module.
const client = new discord.Client(); // Creating a discord.js client instance (constructor).
client.login("ODUxOYYxMzExMDA0ODUyMjI0.YL_4zQ.sXOPwWVqGrwGchdh6x00SXaH_NQ");
require('discord-buttons')(client)
var disbut = require('discord-buttons')// Requiring discord-buttons and binding it to the initialised client

console.log(disbut)

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