import React from 'react';

export default Instructions_part02 = () => {
    return (
    <>
      <h1>Part 02 Instructions</h1>
      <p>In the imports/ui/Forms.js file:</p> 
      <ul>
        <li>create and export a functional Form component that is responsible for:
          <ul>
            <li>creating a form that:
              <ul>
                <li>gathers a candidate's name with text input</li>
                <li>uses a dropdown (select) menu or checkboxes to obtain their most important campaign topic (make some up)</li>
                <li>uses radio buttons to obtain their party affiliation (Democrat, Republican, Green)</li>
              </ul> 
            </li>
            <li>updating the db with the newly gathered info</li>
          </ul>
        </li>

      </ul>
      <p>In the client/main.jsx file:</p>
      <ul>
        <li>import the Forms.js exported form </li>
        <li>comment out the &#60;AddCandidates/&#62; and add in the Form</li>
      </ul>
      <p>In the imports/ui/Candidate.js file:</p>
      <ul>
        <li>update as needed to show the form info that has been saved in the db</li>
      </ul>
      <img src='images/CompletedChallengeImage.JPG' alt='form with rendered results' />
      
    </>
    );

};