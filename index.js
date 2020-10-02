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

client.login("TOKEN");



var t_client = new Twitter({
  consumer_key: "consumer_key",
  consumer_secret: 'consumer_secret',
  access_token_key: 'access_token_key',
  access_token_secret: 'access_token_secret'
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
