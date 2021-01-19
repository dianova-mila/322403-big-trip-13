import {AbstractView} from "./abstract.js";

const createFiltersTemplate = (filterItems, currentFilterType) => {
  const createFilterItemTemplate = (filter, currentFilter) => {
    const {type, name} = filter;

    return (
      `<div class="trip-filters__filter">
                <input
                id="filter-${name}"
                class="trip-filters__filter-input  visually-hidden"
                type="radio"
                name="trip-filter"
                value="${name}"
                ${type === currentFilter ? `checked` : ``}>
                <label class="trip-filters__filter-label" for="filter-${name}">${name}</label>
              </div>`
    );
  };

  const filterItemsTemplate = filterItems
    .map((filter) => createFilterItemTemplate(filter, currentFilterType))
    .join(``);

  return `<div>
            <h2 class="visually-hidden">Filter events</h2>
            <form class="trip-filters" action="#" method="get">
              ${filterItemsTemplate}

              <button class="visually-hidden" type="submit">Accept filter</button>
            </form>
          </div>`;
};

class FiltersView extends AbstractView {
  constructor(filters, currentFilterType) {
    super();
    this._filters = filters;
    this._currentFilter = currentFilterType;

    this._filterTypeChangeHandler = this._filterTypeChangeHandler.bind(this);
  }

  getTemplate() {
    return createFiltersTemplate(this._filters, this._currentFilter);
  }

  _filterTypeChangeHandler(evt) {
    evt.preventDefault();
    this._callback.filterTypeChange(evt.target.value);
  }

  setFilterTypeChangeHandler(callback) {
    this._callback.filterTypeChange = callback;
    this.getElement().addEventListener(`change`, this._filterTypeChangeHandler);
  }
}


export {FiltersView};

