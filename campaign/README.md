
git Lecture: functional component conversion complete

GOALS

    Understand the differencee between functional components and class components

    functional vs class component comparison: 
        https://www.twilio.com/blog/react-choose-functional-components 
    when to use functional or component:
        https://dev.to/phanimurari/where-to-use-class-component-and-functional-component-1ed5

    In class components, the render method will be called whenever the state of the components changes.

    On the other hand, the Functional components render the UI based on the props.

    Hooks
        - Hooks allow function components to have access to state and other React features. Because of this, class components are generally no longer needed.
        - Hooks allow us to "hook" into React features such as state and lifecycle methods.
        - Hooks will not work in React class components.
        - W3C React Hooks: https://www.w3schools.com/react/react_hooks.asp
        - W3C React useState Hook: https://www.w3schools.com/react/react_usestate.asp

    W3C React State: https://www.w3schools.com/react/react_state.asp

    When first learning - class Components should be preferred whenever we have a requirement with the state of the component.

    More advanced - functional components can implement Hooks to use the state and other React features even without writing the Class Component

    FORMS (AddCandidates.js)
        Simplifying React Forms with Hooks
        https://rangle.io/blog/simplifying-controlled-inputs-with-hooks/



Stop runaway node or mongo on windows

taskkill /f /im mongod.exe
taskkill /f /im node.exe
