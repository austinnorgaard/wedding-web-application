import './FAQListComponent.scss';

function FAQList() {
  return (
    <div className="FAQList">
      
      <div className="MainContainer" id="FAQListMainContainer">
        <div className="QuestionsContainer">
          <h1 id="FAQTitle">FAQ Title</h1>
          <ul className='OrderedList' id="questionsList">
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQList;