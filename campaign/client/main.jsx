import React from 'react';
import { createRoot } from 'react-dom/client';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar.js'; 
import NavButtons from '../imports/ui/instructions/NavButtons.js';
import AddCandidates from './../imports/ui/AddCandidates.js';
import {Candidates} from './../imports/api/candidates.js'; 
import RenderCandidates from './../imports/ui/RenderCandidates.js';  

Meteor.subscribe("candidates_collection");

const renderCandidates = (candidateObject) => {
  let candidateInfo = candidateObject.map((candidate) => {
    return <Candidate key={candidate._id} candidate_prop={candidate} />;
  });
  return candidateInfo;
};



Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));

  Tracker.autorun(() => {
    let candidates = Candidates.find().fetch();
    let title = 'The big Campaign';
    let footer_content = 'my footer';

    let jsx = (
      <>
        <NavButtons/>

        <TitleBar titleBar_prop={title}/>
        <AddCandidates/>
        <RenderCandidates candidate_prop = {Candidates.find().fetch()}/>
      </>
    );

    root.render(jsx);
  });
});
