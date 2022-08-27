import FilterView from './view/filter-view.js';
import {render} from './render.js';
import Presenter from './presenter/presenter.js';
const siteFilterElement = document.querySelector('.trip-controls__filters');
const tripEventsElement = document.querySelector('.trip-events');
const boardPresenter = new Presenter();

render(new FilterView(), siteFilterElement);
boardPresenter.init(tripEventsElement);

