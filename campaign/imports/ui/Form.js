import React, { useState } from 'react'; 
import {Candidates} from '../api/candidates.js';

export default Form = () => {

  const [candidateName_state, setCandidateName] = useState('');
const [party_state, setParty] = useState('');
const [topic_state, setTopic] = useState('');


  const processFormDataFunction = (event) => {  
    event.preventDefault(); 
    console.log(party_state);
    console.log(topic_state);
    if(candidateName_state){  
      Candidates.insert({     
          name: candidateName_state,
          votes: 0,
        topic: topic_state,
        party: party_state,
      });
      setCandidateName('');  
    };
  };
    return (
      <>
        <form onSubmit={processFormDataFunction}>
            <input  type='text' 
                    value={candidateName_state}
                    placeholder='Candidate Name'
                    onChange={event => setCandidateName(event.target.value)} />
<br></br>            
<select onChange={event => setTopic(event.target.value)}>
  <option value="">Important Topic</option>
  <option value="Education">Education</option>
  <option value="Economy">Economy</option>
  <option value="Environment">Environment</option>
</select>

<br></br>   
<label><input type="radio" name="party" value="Democrat" 
        onChange={event => setParty(event.target.value)}/>Democrat</label>
<label><input type="radio" name="party" value="Republican" 
        onChange={event => setParty(event.target.value)}/>Republican</label>
<label><input type="radio" name="party" value="Green" 
        onChange={event => setParty(event.target.value)}/>Green</label>
<br></br>

          <button>Add Candidate</button>
        </form>
        <hr />
      </>
    )
};