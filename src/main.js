import FilterView from './view/filter-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
//import FormEditView from './view/form-edit-view.js';
const siteFilterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter();

render(new FilterView(), siteFilterElement);
//render(new FormEditView(), this.boardContainer);
boardPresenter.init(tripEventsElement);

