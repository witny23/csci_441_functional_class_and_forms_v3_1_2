import React from 'react';

export default class Instructions_part01 extends React.Component{ 
  render(){
    return (
    <>
      <h1>Part 01 Instructions</h1>
      <p>The purpose of these challenges is to practice creating function components and useState hook
      </p>
      <h2>Part 1a: Practice with a function component</h2>
      <ul>
        <li>create an imports/ui/Footer.js file and then in that file:
          <ul>
            <li>create a function component that returns an h1 'footer placeholder'</li>
          </ul>
        </li>
        <li>client/main.js:
          <ul>
            <li>import Footer.js</li>
            <li>use Footer in page after the &lt;form&gt;</li>
          </ul>
        </li>
      </ul>
      <h2>Part 1b: Make the footer dynamic by adding a prop</h2>
      <ul>
        <li>client/main.js:
          <ul>
            <li>create a variable called footer_content = 'my foot'; </li>
            <li>pass the footer_content as a prop to the Footer component using &lt;Footer /&gt;</li>
          </ul>
        </li>
        
        <li>imports/ui/Footer.js:
          <ul>
            <li>create a useState hook for the footer content
              <ul>
                <li>set the passed prop as the initial state of useState</li>
                <li>return the footer state as an h1</li>
              </ul>

            </li>

            <li>modify Footer component to use the prop sent from the main</li>
          </ul>
        </li>
      </ul>
    </>
    );
  }
};