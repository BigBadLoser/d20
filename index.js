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
    var messageSplit = message.content.split(' ').join(',').split('d').join(',').split(',')
    if (isNaN(messageSplit[1])){
          //message.channel.send(messageSplit[1] + " is not a number!");
    }
    else if (messageSplit[1].valueOf() == "".valueOf()){
      var rollOutcome = Math.floor(Math.random() * messageSplit[1]) + 1;
      message.channel.send(":game_die: " + message.author + " rolled a d" + messageSplit[1] + " and got a" + rollOutcome);
      message.delete();

    }
    else{
      var i, output = "[", rollOutcome, total = 0;
      for (i = 0; i < messageSplit[1]; i++) {
          rollOutcome = Math.floor(Math.random() * messageSplit[1]) + 1;
          total += rollOutcome;
          if (i != messageSplit[1] - 1){
          output += (rollOutcome + " , ");}
          else {
            output += (rollOutcome + "]");
          }
      }

      message.channel.send(":game_die: " + message.author + " rolled " + messageSplit[1] + "d" + messageSplit[2] + "s and got: " + output + " for a total of "+ total);
    }
  }
});

// Log our bot in using the token from https://discordapp.com/developers/applications/me
client.login('token');
