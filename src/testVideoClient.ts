import { Video } from './classes/video'

export class TestVideoClient {
	apiKey: string;

	constructor(apiKey: string) {
		this.apiKey = apiKey;
	}

	getVideo(videoId: string) {
		return new Promise((resolve, reject) => {
			resolve(new Video());
		})
	}
}
