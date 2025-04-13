import React from 'react';
import { useState } from "react";
import Instructions_part01 from './Instructions_part01.js'; 
import Instructions_part02 from './Instructions_part02.js'; 

let overview_content = () => {
    return (
    <>
        <h1><a href='https://www.w3schools.com/react/react_components.asp' target='_blank'>
            React Component Overview (from W3C)</a></h1>
        <p>Components are independent and reusable bits of code. They serve the same purpose as 
            JavaScript functions, but work in isolation and return HTML.</p>
        <p>Components come in two types, Class components and Function components.</p>
        <h2>Class Component</h2>
        <p>A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.</p>
        <p>The component also <em>requires a render() method</em>, this method returns HTML.</p>
        <code>
            class Car extends React.Component &#123;<br />
                &nbsp;&nbsp;render() &#123;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;return &#60;h2&#62;Hi, I am a Car!&#60;/h2&#62;;<br />
                &nbsp;&nbsp;&#125;<br />
            &#125;
        </code>
        <h2>Function Component</h2>
        <p>A Function component also returns HTML, and behaves much the same way as a Class component, 
            but Function components can be written using much less code, are easier to understand.
            Function components also have access to hooks which class components do not have access to hooks.</p>
        <code>
            function Car()  &#123;<br />
                &nbsp;&nbsp;return &#60;h2&#62;Hi, I am a Car!&#60;/h2&#62;<br />
            &#125;
        </code>
        
        <h2><a href='https://www.w3schools.com/react/react_hooks.asp' target='_blank'>React Hooks</a></h2>
        <p>Hooks allow function components to have access to state and other React features. </p>
        <h3>React <a href='https://reactjs.org/docs/hooks-state.html' target='_blank'>useState Hook</a></h3>
        <p>The React useState Hook allows us to track state in a function component.</p>
        <p>State generally refers to data or properties that need to be tracking in an application.</p>
        <h3>Initialize useState</h3>
        <p>We initialize our state by calling useState in our function component.</p>
        <p>useState accepts an initial state and returns two values:</p>
        <ul>
            <li>The current state.</li>
            <li>A function that updates the state which can be included anywhere in the component.</li>
        </ul>
        <code>
            export default FavoriteCar() = (props) =&#62;  &#123;<br />
                &nbsp;&nbsp;const [color, setColor] = useState(props.color_prop_passed);<br />
                &nbsp;&nbsp;return (<br />
                &nbsp;&nbsp;&nbsp;&#60;&#62;<br />
                &nbsp;&nbsp;&nbsp;&nbsp;&#60;h2&#62;&#123;color&#125;&#60;/h2&#62;<br />
                &nbsp;&nbsp;&nbsp;&#60;/&#62;<br />
                &nbsp;&nbsp;)<br />
            &#125;
        </code>
    </>

    )
 

}


export default Overview = () => {
    let html_content = overview_content();
    const [content, setContent] = useState(html_content);
    
    return (
        <>
            <button onClick={() => setContent("")}> 
                clear top matter</button>
            <button onClick={() => setContent(html_content)}> 
                show overview </button>
            <button onClick={() => setContent(<Instructions_part01 />)}> 
                show Instructions Part 01</button>
            <button onClick={() => setContent(<Instructions_part02 />)}> 
                show Instructions Part 02</button>
            {content}
        </>
    );

};