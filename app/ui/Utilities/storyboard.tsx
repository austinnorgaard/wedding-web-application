'use client';

import '@/app/ui/Styles/CSS/StoryBoardComponent.css';
import React from 'react';
import story from "@/app/ui/Resources/Other/story.json";
import { useState, useEffect } from 'react';

function StoryBoard() {
    const [storyText, setText]: any = useState("");
    var titleList: any = [];
    var storyList: any = [];
    var footerList: any = [];

    useEffect(() => {
        setText(story.text);
    }, [])

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
                    {titleList.map((title: any, key: any) => (
                        <div className="TextBox" id={"Title"+key} key={key}>
                            <h3 className="Title pb-5">{title}</h3>
                            <p className="Text pb-5">{storyList[key]}</p>
                        </div>
                    ))}
                </div>
                <div className='FooterContainer'>
                    {footerList.map((footer: any, key: any) => (
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