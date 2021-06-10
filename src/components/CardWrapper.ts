import { v4 as uuidv4 } from 'uuid';
import { Core } from '../util/Core';
import { Image } from './Image';
import { Video } from './Video';
import { Post } from './Post';
import { CARDWRAPPER_INNERHTML } from '../constants/innerHTML';

export class CardWrapper extends Core<HTMLElement> {
  constructor() {
    super(CARDWRAPPER_INNERHTML);

    const imageTest = new Image({
      id: uuidv4(),
      url: 'https://yt3.ggpht.com/ytc/AAUvwniV3e0j1NQbR2l1RW5C01DNjglP_gjnHuPz8JHM=s800-c-k-c0x00ffffff-no-rj',
      title: 'Jeon Inhyuk Band',
      description: 'Jeon Inhyuk band official image',
    });

    imageTest.attachTo(this.$element, 'afterbegin');

    const videoTest = new Video({
      url: 'https://www.youtube.com/watch?v=TRZl3cVTwAY',
      title: '[전인혁BAND]신성우- ‘서 시’ Cover by 전인혁BAND',
      description:
        '고화질 , 이어폰으로 감상 부탁드립니다.\n\n안녕하세요. \n이번엔 저희가 연주한 곡은 \n신성우 선배님의 명곡 ‘서시’ 입니다.\n명절 잘 보내시고요, 즐겁게 감상해주세요~\n새해 복 많이 받으세요.^^\n\n',
    });

    videoTest.attachTo(this.$element, 'beforeend');

    const videoTest2 = new Video({
      url: 'https://youtu.be/wtTvZH3Q7js',
      title: '[[전인혁BAND]김종서- ‘대답 없는 너’ Cover by 전인혁BAND',
      description:
        '고화질 , 이어폰으로 감상 부탁드립니다.\n\n안녕하세요. 이번엔 연주한 곡은 \n김종서 선배님의 명곡 ‘대답 없는 너’를 연주해봤습니다. \n환절기에 감기 조심하고요, 즐겁게 감상해주세요.^^\n\n',
    });

    videoTest2.attachTo(this.$element, 'beforeend');

    const postTest = new Post({
      id: uuidv4(),
      title: 'note test',
      description: '격하게 아무것도 하기싫다ㅠㅠ',
    });

    postTest.attachTo(this.$element, 'beforeend');
  }

  attachTo(parent: HTMLElement, position: InsertPosition = 'afterbegin') {
    parent.insertAdjacentElement(position, this.$element);
  }

  // add image item

  // add video item

  // add post item
}
