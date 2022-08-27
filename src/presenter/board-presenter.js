import BoardView from '../view/content-view.js';
//import SortView from '../view/sort-view.js';
import ListpointView from '../view/new-point-list-view.js';
import CreateFormEditView from '../view/form-edit-view.js';
import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView();
  taskListComponent = new ListpointView();

  init = (boardContainer) => {
    this.boardContainer = boardContainer;

    render(this.boardComponent, this.boardContainer);
    render(new CreateFormEditView(), this.boardComponent.getElement());
    render(this.taskListComponent, this.boardComponent.getElement());

    for (let i = 0; i < 2; i++) {
      render(new ListpointView(), this.taskListComponent.getElement());
    }
  };
}
