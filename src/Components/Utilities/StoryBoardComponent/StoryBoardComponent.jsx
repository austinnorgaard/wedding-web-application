import './StoryBoardComponent.scss';
import React from 'react';
import story from "../../../Resources/Other/story.txt";
import { useState } from 'react';

function StoryBoard() {
    const [storyText, setText] = useState("");
    var titleList = [];
    var storyList = [];
    var footerList = [];

    fetch(story)
    .then(r => r.text())
    .then(text => {
        setText(text);
    })

    for (let i = 0; i < storyText.split("^").length; i++) {
        if (storyText.split("^")[i][0] === 'T') {
            titleList.push(storyText.split("^")[i].trimEnd());
            titleList[titleList.length - 1] = titleList[titleList.length - 1].replace("T ", "")
        }
        else if (storyText.split("^")[i][0] === 'S') {
            storyList.push(storyText.split("^")[i].trimEnd());
            storyList[storyList.length - 1] = storyList[storyList.length - 1].replace("S ", "")
        }
        else if (storyText.split("^")[i][0] === 'F') {
            footerList.push(storyText.split("^")[i].trimEnd());
            footerList[footerList.length - 1] = footerList[footerList.length - 1].replace("F ", "")
        }
    }

    console.log(titleList);
    console.log(storyList);
    console.log(footerList);

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
                    {titleList.map((title, key) => (
                        <div className="TextBox" id={"Title"+key} key={key}>
                            <h3 className="Title">{title}</h3>
                            <p className="Text">{storyList[key]}</p>
                        </div>
                    ))}
                </div>
                <div className='FooterContainer'>
                    {footerList.map((footer, key) => (
                        <div className='Footer' id="storyFooter" key={key}>
                            <h3 id="storyFooterText">{footer}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StoryBoard;