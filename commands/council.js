module.exports = {
	name: 'council',
	description: 'Council Assistance Request',
	execute(message, args) {
		// Command Goes Here
		message.delete({ timeout:1000 });
		message.channel.send({embed: {
			color: 11351084,
			description: "Understood, Direct Messaging you now!"
    }})
			.then(msg => {
				msg.delete({ timeout: 10000 });
			});
		},
};
