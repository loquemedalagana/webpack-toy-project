import { Core, ModalControllable } from "./Core";
import { NAVIGATION_INNERHTML } from '../constants/innerHTML';
import { PostType } from '../types/item';

export class Navigation extends Core<HTMLElement> implements ModalControllable {
  private $navItems: HTMLElement[];
  private navItemsName: Array<PostType> = ['image', 'video', 'post'];

  constructor() {
    super(NAVIGATION_INNERHTML);

    this.$navItems = this.createNavItems();
    this.$navItems.forEach(($navItem) => {
      this.$element.appendChild($navItem);
    });
  }

  private createNavItems() {
    return this.navItemsName.map((itemTitle, index) => {
      const $navItemElement = document.createElement('li');
      const $navButtonElement = document.createElement('button');
      $navItemElement.setAttribute('id', `nav-${index}`);
      $navButtonElement.setAttribute('id', `new-${itemTitle}`);
      $navButtonElement.setAttribute('class', 'button-transparent nav-button');
      $navButtonElement.innerText = itemTitle;

      $navButtonElement.onclick = () => console.log(itemTitle);

      $navItemElement.appendChild($navButtonElement);

      return $navItemElement;
    });
  }
}
