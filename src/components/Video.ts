import { Core } from '../util/Core';
import { VideoItem } from '../types/item';
import { VIDEO_INNERHTML } from '../constants/innerHTML';
import { youtubeRegExp } from '../constants/regExp';

export class Video extends Core<HTMLIFrameElement | HTMLElement> {
  videoURL: string;

  constructor(videoInfo: VideoItem) {
    super(VIDEO_INNERHTML);
    this.videoURL = this.convertToEmbeddedURL(videoInfo.url);

    const $videoElement = this.$element.querySelector('.video-player')! as HTMLIFrameElement;
    $videoElement.src = this.videoURL;

    const $descriptionElement = this.$element.querySelector('.card-description')! as HTMLElement;
    $descriptionElement.innerText = videoInfo.description;
  }

  getVideoId (url: string): string | undefined {
    const defaultVideoId = 'OSXOC45wDRA';
    const match = url.match(youtubeRegExp);
    const videoId = match ? match[1] || match[2] : undefined;
    return videoId || defaultVideoId;
  }

  private convertToEmbeddedURL(url: string): string {
    return `https://www.youtube.com/embed/${this.getVideoId(url)}`;
  }
}
