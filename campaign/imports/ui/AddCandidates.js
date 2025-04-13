import React, { useState } from 'react'; 
import {Candidates} from './../api/candidates.js';

export default AddCandidates = () => {
  const [candidateName_state, setCandidateName] = useState('');


  const processFormDataFunction = (event) => {
    event.preventDefault();
  
    if(candidateName_state){
      setCandidateName('');
      Candidates.insert({
          name: candidateName_state,
          votes: 0,
      });
    };
  };
    return (
      <>
        <form onSubmit={processFormDataFunction}>
          <label>
            <input  type='text' 
                    value={candidateName_state}
                    placeholder='Candidate Name'
                    onChange={event => setCandidateName(event.target.value)} />
          </label>
          <button>Add Candidate</button>
        </form>
        <hr />
      </>
    )
};