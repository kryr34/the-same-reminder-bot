import { Message } from 'discord.js';

export function deleteAfter( timeout: number ) {
	return (msg: Message) => {
		setTimeout(() => {
			try{ msg.delete(); } catch{ }
			}, timeout);
	}
}

