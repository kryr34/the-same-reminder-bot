import {
	MessageActionRow,
	MessageButton,
	CommandInteractionOptionResolver,
	Message } from 'discord.js';

export function sentAskingMsg(message: Message) {
	return () => {
		const row = new MessageActionRow()
			.addComponents(
				new MessageButton()
					.setCustomId('add video button')
					.setLabel('wah!')
					.setStyle('PRIMARY'),
			);
		return message.reply({
			content: 'do yu wah tuu ti?',
			components: [row],
			allowedMentions: { repliedUser: false },
		})
	}
}
