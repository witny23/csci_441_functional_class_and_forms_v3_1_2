import React from 'react';
import { Candidates } from './../api/candidates.js';

export default function AddCandidates() {

  const processFormDataFunction = (event) => {
    event.preventDefault();
    const candidateName = event.target.formInputNameAttrubute.value;

    if (candidateName) {
      event.target.formInputNameAttrubute.value = '';
      Candidates.insert({
        name: candidateName,
        votes: 0,
      });
    }
  };

  return (
    <>
      <form onSubmit={processFormDataFunction}>
        <input
          type='text'
          name='formInputNameAttrubute'
          placeholder='Candidate Name'
        />
        <button>Add Candidate</button>
      </form>
    </>
  );
}
