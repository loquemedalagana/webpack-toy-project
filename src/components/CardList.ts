import {
  ClosableComponent,
  ClosableHeaderComponentConstructor,
  CloseableComponentConstructor,
  Component,
  Composable,
  Core,
} from './Core';
import { Image } from './Image';
import { Video } from './Video';
import { Post } from './Post';
import { ImageItem, PostDataType, PostItem, VideoItem } from '../types/item';
import { CARDWRAPPER_INNERHTML } from '../constants/innerHTML';

import { CardDescription } from './Card/CardDescription';

export class CardList extends Core<HTMLElement> implements Composable {
  private postComponentList: Array<ClosableComponent>; // Card component로 통합?

  constructor(
    private cardConstructor: CloseableComponentConstructor,
    private cardHeaderConstructor: ClosableHeaderComponentConstructor,
  ) {
    super(CARDWRAPPER_INNERHTML);
    this.postComponentList = this.getLocalStorageData();

    this.addChildren(this.postComponentList);
  }

  private static getMediaComponent(postData: PostDataType): Image | Video | Post {
    switch (postData.type) {
      case 'video':
        return new Video(postData! as VideoItem);
      case 'post':
        return new Post(postData! as PostItem);
      case 'image':
        return new Image(postData! as ImageItem);
    }
  }

  private getLocalStorageData() {
    const POST_LIST_LENGTH = localStorage.length;
    const extractedPostList: Array<ClosableComponent> = [];

    for (let i = 0; i < POST_LIST_LENGTH; i++) {
      const key = localStorage.key(i);
      const value = JSON.parse(localStorage.getItem(key))! as PostDataType;

      const cardComponent = new this.cardConstructor(value.id);
      const onCloseListener = () => cardComponent.removeFrom(this.$element);

      const cardHeaderComponent = new this.cardHeaderConstructor(value, onCloseListener);
      const mediaComponent = CardList.getMediaComponent(value);
      const cardDescriptionComponent = new CardDescription(value.description);

      cardComponent.addChildren([cardHeaderComponent, mediaComponent, cardDescriptionComponent]);
      cardComponent.setOnCloseListener(onCloseListener);

      extractedPostList.push(cardComponent);
    }

    return extractedPostList;
  }

  addChildren(children: Component[]) {
    children.forEach(child => {
      child.attachTo(this.$element, 'beforeend');
    });
  }
}
