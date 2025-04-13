import React from 'react';
import { createRoot } from 'react-dom/client';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import TitleBar from './../imports/ui/TitleBar.js'; 
import NavButtons from '../imports/ui/instructions/NavButtons.js';
import {Candidates} from './../imports/api/candidates.js'; 
import RenderCandidates from './../imports/ui/RenderCandidates.js';  
import Form from './../imports/ui/Form.js';

Meteor.subscribe("candidates_collection");

Meteor.startup(() => {
  const root = createRoot(document.getElementById('react-target'));

  Tracker.autorun(() => {
    let title = 'The big Campaign';

    let jsx = (
      <>
        <NavButtons/>

        <TitleBar titleBar_prop={title}/>
        {/* <AddCandidates/> */}
        <Form/>
        <RenderCandidates candidate_prop = {Candidates.find().fetch()}/>
      </>
    );

    root.render(jsx);
  });
});
