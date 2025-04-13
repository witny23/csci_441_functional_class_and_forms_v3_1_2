import React, { useState } from "react";


export default Footer = (props) => {
  const [footer_state, setFooterState] = useState(props.footer_prop);
  // did not need to use useState, could have just used props.footer_prop. 
    //  it was good practice to use useState
  
  return (
      <>
        <h1>{footer_state}</h1>
      </>
  );

};