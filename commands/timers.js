module.exports = {
	name: 'timers',
	description: 'Timers for FFXIV',
	execute(message, args) {
		const eorzeaTime = new EorzeaTime();
		// Clear Request
    console.log(eorzeaTime.toString());
		message.delete({ timeout:1000 });
		// Respond to Request
		message.channel.send({embed: {
			color: 11351084,
			description: "Check your DMs! I'll whisper you in a moment!"
    }})
		.then(msg => {
			msg.delete({ timeout: 10000 });
		});
	},
};
