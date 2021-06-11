import { Core } from './Core';
import { CARD_HEADER_INNERHTML } from '../constants/innerHTML';

type OnCloseLister = () => void;

export class CardHeader extends Core<HTMLElement> {
  private handleClose?: OnCloseLister;

  constructor(id: string, title?: string) {
    super(CARD_HEADER_INNERHTML);
    const $cardTitle = this.$element.querySelector('.card-title')! as HTMLHeadingElement;
    const $closeButton = this.$element.querySelector('.card-close-button')! as HTMLButtonElement;
    $cardTitle.innerText = title || "제목 없음";

    $closeButton.onclick = () => {
      this.handleClose && this.handleClose();
    };
  }

  setOnCloseLister(listener: OnCloseLister) {
    this.handleClose = listener;
  }
}
