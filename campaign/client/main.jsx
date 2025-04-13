import React from 'react';
import { createRoot } from 'react-dom/client';
import {Meteor} from 'meteor/meteor';
import {Candidates} from './../imports/api/candidates.js'; 
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar.js'; 
import Footer from './../imports/ui/Footer.js';
import AddCandidates from './../imports/ui/AddCandidates.js';
import Overview from '../imports/ui/instructions/Overview.js';
import Candidate from './../imports/ui/Candidate.js';  

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
        <Overview />
        <hr />
        <TitleBar title_prop={title} />
        <AddCandidates />
        {renderCandidates(candidates)}
        <hr />
        <Footer footer_prop={footer_content}/>
      </>
    );

    root.render(jsx);
  });
});
