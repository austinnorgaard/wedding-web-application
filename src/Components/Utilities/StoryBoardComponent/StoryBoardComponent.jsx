import './StoryBoardComponent.scss';
import React from 'react';
import story from "../../../Resources/Other/story.txt";
import { useState } from 'react';

function StoryBoard() {
    const [storyText, setText] = useState("");
    var titleList = [""];
    var textList = [""];
    var footerText = [""];
    var titles = [];
    var text = [];
    var footer = [];
    var titleCount = 0;
    var textCount = 0;
    var footerCount = 0;
    var isTitle = true;
    var isFooter = false;

    fetch(story)
    .then(r => r.text())
    .then(text => {
        setText(text);
    });

    for (let i = 0; i < storyText.length; i++) {
        if (isFooter && storyText[i] !== "\n") {
            footerText[footerCount] += storyText[i];
        }
        else if (isTitle && storyText[i] !== "\n") {
            titleList[titleCount] += storyText[i];
        }
        else if (!isTitle && storyText[i] !== "\n") {
            textList[textCount] += storyText[i];
        }
        if (storyText[i] === "\n") {
            if (storyText[i+1] === "*") {
                i = i+1;
                isFooter = true;
            }
            else if (storyText[i+1] === '\n') {
                textCount = ++textCount;
                isTitle = !isTitle;
                isFooter = false;
            }
            else if (storyText[i+1] === "-") {
                titleCount = ++titleCount;
                i = i+1;
                isTitle = !isTitle;
                isFooter = false;
            }
        }
    }

    for (let i = 0; i < textCount; i++) {
        textList[i] = textList[i].replace("undefined", "");
        textList[i] = textList[i].replace("-", "");
    }

    for (let i = 0; i < titleCount; i++) {
        titleList[i] = titleList[i].replace("undefined", "");
        titleList[i] = titleList[i].replace("-", "");
    }

    for (let i = 0; i < footerCount; i++) {
        footerText[i] = footerText[i].replace("undefined", "");
        footerText[i] = footerText[i].replace("-", "");
    }

    titles.push(titleList);
    text.push(textList);
    footer.push(footerText)

    console.log(titles);
    console.log(text);
    console.log(footer)

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
                            <p className="Text">{text[key]}</p>
                        </div>
                    ))}
                </div>
                <div className='FooterContainer'>
                    {footer.map((footerText, key) => (
                        <div className='Footer' id="storyFooter" key={key}>
                            <h3 id="storyFooterText">{footerText}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StoryBoard;