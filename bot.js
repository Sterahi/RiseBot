var Discord = require('discord.js')
var bot = new Discord.Client()

bot.on('message', msg => {
  let prefix = '!'

  // Kicks out wihtout the prefix
  if (!msg.content.startsWith(prefix)) { return }

  if (msg.author.bot) { return }
  if (msg.content.startsWith(prefix + 'ping')) {
    msg.channel.sendMessage('Pong!')
  } else if (msg.content.startsWith(prefix + 'foo')) {
    msg.channel.sendMessage('bar!')
  } else {
    msg.channel.sendMessage('Sorry, ' + msg.author + ' I didn\'t understand that command.')
  }
})

bot.on('ready', () => {
  console.log('LizBot running!')
})

bot.login('MjM1OTUxNzczNTI3ODM0NjI0.CuCCwQ.44wP6jmX2ZlMcBETk1A7maPxkzw')
