import {AbstractView} from "./abstract.js";

const createSiteMenuTemplate = () => {
  return `<div>
            <h2 class="visually-hidden">Switch trip view</h2>
            <nav class="trip-controls__trip-tabs  trip-tabs">
              <a class="trip-tabs__btn  trip-tabs__btn--active" href="#">Table</a>
              <a class="trip-tabs__btn" href="#">Stats</a>
            </nav>
          </div>`;
};

class SiteMenuView extends AbstractView {
  getTemplate() {
    return createSiteMenuTemplate();
  }
}


export {SiteMenuView};
