import React from 'react';
import { useState } from "react";
import Instructions_part01 from './Instructions_part01.js'; 
import Instructions_part02 from './Instructions_part02.js'; 
import Lecture_content from './LectureContent.js'; 




export default NavButtons = (props) => {
    const [content, setContent] = useState(<Lecture_content />);
    
    return (
        <>
            <button onClick={() => setContent("")}> 
                clear top matter</button>
            <button onClick={() => setContent(<Lecture_content />)}> 
                show form example </button>
            <button onClick={() => setContent(<Instructions_part01 />)}> 
                show Instructions Part 01</button>
            <button onClick={() => setContent(<Instructions_part02 />)}> 
                show Instructions Part 02</button>
            {content}
            <hr></hr><hr></hr>

            
        </>
    );

};