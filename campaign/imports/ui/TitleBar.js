import React from 'react'; 



export default class TitleBar extends React.Component{
  render(){
    return (
      <>
        <h1>{this.props.title_prop}</h1>
      </>
    );
  }
};