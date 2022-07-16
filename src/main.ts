import 'module-alias/register';
import { Client, Intents } from 'discord.js';
import { TestVideoClient } from '@/testVideoClient';

import secret from '@/secret.json';

import { getVideoIDFromUrl } from '@/functions';
import { deleteAfter as deleteMsgAfter } from '@/message/utils';
import { sentAskingMsg } from '@/message/askingMessage';


const testVideoClient = new TestVideoClient('');
const discordClient = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
});

discordClient.login(secret.token);

discordClient.on('ready', async () => {
	console.log('Discord.js discordClient is ready!');
});

discordClient.on('interactionCreate', async (interaction) => {
	//console.log(interaction);
	//if (!interaction.isChatInputCommand()) return;

	//if (interaction.commandName === 'ping') {
	//	await interaction.reply('Pong!');
	//}
});

discordClient.on('messageCreate', async (message) => {
	if (!message.guild) return;
	if (message.author.bot) return;
	if (message.channel.type === 'DM') return;

	const viedoId = getVideoIDFromUrl(message.content);
	if(!viedoId) return;
	testVideoClient.getVideo(viedoId)
	.then(sentAskingMsg(message))
	.then(deleteMsgAfter(5000));
});
