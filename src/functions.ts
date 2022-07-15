const VIDEO_URL_REGEX = /((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu\.be|holodex\.net))(\/(?:[\w-]+\?v=|embed\/|v\/|watch\/)?)([\w-]+)(\S+)?/i;
export function getVideoIDFromUrl( url: string ) {
	if (!VIDEO_URL_REGEX.test(url)) return;
	const match = url.match(VIDEO_URL_REGEX);
	if (match && match[5]) {
		return match[5];
	}
}

