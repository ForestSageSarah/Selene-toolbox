const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const EorzeaTime = require('eorzea-time');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

client.once('ready', () => {
  console.log('I am Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('Do I look like some genie!? I don\'t know what you want!')
    .then(msg => {
    msg.delete({ timeout: 10000 });
  });
	}
});

client.login(token);
