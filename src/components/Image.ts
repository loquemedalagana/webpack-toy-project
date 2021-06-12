import { Core } from './Core';
import { ImageItem } from '../types/item';
import { IMAGE_INNERHTML } from '../constants/innerHTML';

export class Image extends Core<HTMLElement | HTMLImageElement> {
  constructor(imageInfo: ImageItem) {
    super(IMAGE_INNERHTML, 'media');

    const $imageElement = this.$element.querySelector('.image')! as HTMLImageElement;

    $imageElement.src = imageInfo.url;
    $imageElement.alt = imageInfo.title;
  }

}
