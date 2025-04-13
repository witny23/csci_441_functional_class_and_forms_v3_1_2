import React, { useState } from 'react'; 
import {Candidates} from './../api/candidates.js';

export default AddCandidates = () => {
  {/* The following is used to hold and set the new candidate's name */}
  const [candidateName_state, setCandidateName] = useState('');

  {/* the following is going to handle the submission of the form */}
  const processFormDataFunction = (event) => {  
    event.preventDefault(); {/* don't let the page refresh */}
  
    if(candidateName_state){  {/* verify that this is not an empty string */}
      Candidates.insert({     
          name: candidateName_state,
          votes: 0,
      });
      setCandidateName('');   {/* clear the form of the name that was entered */}
    };
  };
    return (
      <>
        <form onSubmit={processFormDataFunction}>
          <label>
            <input  type='text' 
                    value={candidateName_state}
                    placeholder='Candidate Name'
                    // annonymous arrow function that passes event to the expression
                    // basically, update the state for every letter entered
                    onChange={event => setCandidateName(event.target.value)} />
          </label>
          <button>Add Candidate</button>
        </form>
        <hr />
      </>
    )
};