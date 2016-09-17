import React from 'react';

export default class CheckList extends React.Component{
    
    let tasks= this.props.tasks.map(task=>{
        
    })
    
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
      </div>
    );
}