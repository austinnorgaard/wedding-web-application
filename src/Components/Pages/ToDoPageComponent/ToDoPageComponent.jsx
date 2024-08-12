import './ToDoPageComponent.scss';
import MenuBar from '../../Utilities/MenuBarComponent/MenuBarComponent';

function ToDoPage() {
  return (
    <div className="ToDoPage">
      
      <div className="MainContainer" id="ToDoMainContainer">
        <MenuBar />
        <h1>Things to do Title</h1>
      </div>
    </div>
  );
}

export default ToDoPage;