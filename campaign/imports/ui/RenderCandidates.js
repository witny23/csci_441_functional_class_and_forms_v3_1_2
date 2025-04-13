import React from 'react';
import Candidate from './Candidate.js';  


export default renderCandidates = (props) => {
    let candidateInfo = props.candidate_prop.map((candidate) => {
      return <Candidate key={candidate._id} candidate_prop={candidate} />;
    });
    return candidateInfo;
  };
  