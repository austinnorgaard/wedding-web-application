import '@/app/ui/Styles/CSS/StoryBoardComponent.css';

export default function StoryBoard() {
    return (
        <div className='StoryBoard'>
            <div className="MainContainer" id="StoryBoardMainContainer">
                <div className="TitleContainer">
                    <div className="StoryHeader" id="storyHead">
                        <div id="storyHeaderImage">
                        <h1 id="StoryTitle">Our Story</h1>
                        </div>
                    </div>
                </div>
                <div className='OrderedList' id="textList">
                    {/*titleList.map((title, key) => (
                        <div className="TextBox" id={"Title"+key} key={key}>
                            <h3 className="Title">{title}</h3>
                            <p className="Text">{storyList[key]}</p>
                        </div>
                    ))*/}
                </div>
                <div className='FooterContainer'>
                    {/*footerList.map((footer, key) => (
                        <div className='Footer' id="storyFooter" key={key}>
                            <h3 id="storyFooterText">{footer}</h3>
                        </div>
                    ))*/}
                </div>
            </div>
        </div>
    );
}