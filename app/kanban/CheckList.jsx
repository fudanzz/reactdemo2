import React from 'react';

export default class CheckList extends React.Component{
    
    render(){
        console.log('******');
        console.log(this.props.tasks.length);
        
    let tasks= this.props.tasks.map(task=>{
        return <li className="checklist__task"> 
            <input type="checkbox" defaultChecked={task.done} />
            {task.name}     
            <a href="#" className="checklist__task--remove" />
        </li>
    });
    
         console.log(tasks);
    return (
      <div className="test">
        <ul>{tasks}</ul>
      </div>
    );
    }
    

}