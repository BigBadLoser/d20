/**
 * A ping pong bot, whenever you send "ping", it replies "pong".
 */

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "ping"
  if (message.content.startsWith(".roll")) {
    var messageSplit = message.content.split(" d");
    Math.floor(Math.random() * 10) + 1;
    if (isNaN(messageSplit[1])){
          message.channel.send(messageSplit[1] + " is not a number!");
    }
    else {
      var rollOutcome = Math.floor(Math.random() * messageSplit[1]) + 1;
      message.channel.send(":game_die: " + message.author + " rolled a d" + messageSplit[1] + " and got " + rollOutcome);
      message.delete();
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('NDM3NjI2MDMyOTM0MjIzODc0.DpXDAg.xItO_EXQH6RRqXrwk1riM8hgtPY');
