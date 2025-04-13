import React, { useState } from 'react'; 
import {Candidates} from './../api/candidates.js'; 

export default Candidate = (props) => {
    // console.log(props)

    return (
        
        <> 
            <p key={props.candidate_prop._id}>
                <button onClick={() => 
                    Candidates.remove({_id: props.candidate_prop._id})
                }>X</button> 
                <button onClick={() => 
                    Candidates.update({_id: props.candidate_prop._id}, {$inc: {votes: 1}}) 
                }>+1</button> 
                <button onClick={() => {  
                    Candidates.update({_id: props.candidate_prop._id}, {$inc: {votes: -1}})
                }}>-1</button>
                {' ' + props.candidate_prop.name} has {props.candidate_prop.votes} vote[s] {' '}
            </p>
         </>
      );
};