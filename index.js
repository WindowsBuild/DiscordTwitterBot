const Twitter = require('twitter');
const Discord = require('discord.js');

const client = new Discord.Client();


client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

  sendTweet(`From Discord Server Daddy UwU: ${message.content}`, message)
	console.log(message.content);
  
});

client.login('NzIyNTI1NDMzMzA3OTg3OTk5.XukW2A.XFO0X8bQTI69haWP_LUd3YdS6AM');



var t_client = new Twitter({
  consumer_key: '7OZ1N5XBy6zsGwy0DltXyxMjJ',
  consumer_secret: 'XZwEzGyJhgi880CVA36hB97bT3aWsoJvvruk7CbomCRXGGVmTk',
  access_token_key: '724349761340329984-dNwMptIItXxTeGY7WR8PJ4DStxFrlqP',
  access_token_secret: '3UES80IrpV0rZ0LA39Q5HZAzLYBZNVkmMwV3Qz9E5jaLG'
});


function sendTweet(status, message){
if(message.author.bot) return;
t_client.post('statuses/update', {status: `${status}`},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body.
  console.log(response);  // Raw response object.
  console.log(tweet.id);
  message.reply(`here is your tweet id uwu: ${tweet.id}`)
});

}
