import ListView from '../view/events-list-view.js';
import FormEditView from '../view/form-edit-view.js';
import {render} from '../render.js';
import SortView from '../view/sort-view.js';
//import CreateFormEditView from '../view/form-edit-view.js';
import PointView from '../view/list-point-view.js';

//const ListContainer = document.querySelector('.trip-events__list');

export default class Presenter {
  eventsListComponent = new ListView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;
    render(new SortView(), this.boardContainer);
    render(new FormEditView(), this.boardContainer);
    render(this.eventsListComponent, this.boardContainer);

    for (let i = 0; i < 3; i++) {
      render(new PointView() , this.eventsListComponent.getElement());
    }
  };
}
