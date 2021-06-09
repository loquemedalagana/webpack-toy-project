import { APP_TITLE_INNTERHTML } from '../constants/innerHTML';

export class Header {
  private $headerWrapper: HTMLElement;
  private $headerContainer: HTMLElement;

  constructor() {
    this.$headerWrapper = document.createElement('header');
    this.$headerContainer = document.createElement('div');

    // setAttribute vs classlist.add 차이점
    this.$headerWrapper.setAttribute('class', 'appbar appbar-main-color')
    this.$headerContainer.setAttribute('class', 'container container-fluid');
    this.$headerContainer.innerHTML = APP_TITLE_INNTERHTML;
    this.$headerWrapper.appendChild(this.$headerContainer);
  }

  attachHeader(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.$headerWrapper);
  }
}
