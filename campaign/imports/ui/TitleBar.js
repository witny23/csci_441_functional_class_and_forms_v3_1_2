import React, { useState } from "react";


export default TitleBar = (props) => {
  const [titleBar_state, setTitleBarState] = useState(props.titleBar_prop);
  // did not need to use useState, could have just used props.titleBar_prop. 
    //  it was good practice to use useState
  return (
      <>
        <h1>{titleBar_state}</h1>
      </>
  );

};