import SortView from './view/sort-view.js';
import FilterView from './view/filter-view.js';
//import CreateFormView from './view/form-create-view.js';
import CreateFormEditView from './view/form-edit-view.js';
import ListpointView from './view/new-point-list-view.js';
import {render} from './render.js';
import BoardPresenter from './presenter/board-presenter.js';
const siteFilterElement = document.querySelector('.trip-controls__filters');
const siteSortElement = document.querySelector('.trip-events');
const boardPresenter = new BoardPresenter();
//const siteHeaderElement = document.querySelector('.btn--yellow');
render(new SortView(), siteSortElement);
render(new FilterView(), siteFilterElement);
//render(new CreateFormView(), siteHeaderElement);
render(new CreateFormEditView(), siteSortElement);
render(new ListpointView, siteSortElement);

boardPresenter.init(siteSortElement);
 