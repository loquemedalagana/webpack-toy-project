import {APP_TITLE} from "./texts";
import { ImageItem } from "../types/item";

export const COPYRIGHT_INNERHTML = `
<div class="container container-fluid">
  <span class="copyright-text">
    &copy; ${new Date().getFullYear()} , developed 
    ❤️
    by
    <a
      href="https://github.com/loquemedalagana"
      target="_blank"
      rel="noreferrer noopener"
    >
      Mrs. Liberty
    </a>
    ${" "}
    for a better world.
  </span>
</div>
`;

export const APP_TITLE_INNTERHTML = `
<div class="header-title">
  <h1>${APP_TITLE}</h1>    
</div>
`;

export const CARD_INNERHTML = `
<li class="card">
  <section class="card-root">
    <div class="card-body">
    </div>
  </section>
</li>
`;

export const CARD_HEADER_INNERHTML = `
  <div class="card-header">
    <h2 class="card-title"></h2>
    <div class="card-control">
      <button class="card-close-button">&times;</button>
    </div>
  </div>
`;


export const CARD_DESCRIPTION_INNERHTML = `
  <div class="card-description-wrapper">
    <p class="card-description"></p>
  </div>
`;

export const IMAGE_INNERHTML = `
<div class="card-media-wrapper image-thumbnail-wrapper">
  <img class="image image-thumbnail" >
</div>
`;

export const VIDEO_INNERHTML = `
<div class="card-media-wrapper">
  <div class="video-player-wrapper">
    <iframe class="video-player" frameborder="0"></iframe>
  </div>
</div>
`;

export const HEADER_INNERHTML = `
<header class="appbar appbar-main-color"></header>
`;

export const FOOTER_INNERHTML = `
<footer></footer>
`;

export const CARDWRAPPER_INNERHTML = `
<ul id="card-list-wrapper" class="container container-fluid">
</ul>
`;

export const NAVIGATION_INNERHTML = `
<ul class="nav"></ul>
`;

export const MODAL_INNERHTML = `
<div class="modal-wrapper">
  <div class="modal-root hidden">
    <div class="modal-body"></div>
  </div>
</div>
`;

export const MODAL_HEADER_INNERHTML = `
<div class="modal-header"></div>
`;

export const MODAL_ACTION_INNERHTML = `
<div class="modal-action">
  <button class="modal-action-button"></button>
</div>
`;
