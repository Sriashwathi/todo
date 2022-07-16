import React from 'react';
import axios from "axios";
class TaskList extends React.Component{
    state={
        task:""
    }
    onDeleteClick=()=>{
        console.log("delete log")
    }
    onSubmitClick=()=>{
        axios.post('http://localhost:4000/addtask',{
            task:this.state.task
        })
    }
    

    render(){
        return(
            <div>
                <h2>TaskList</h2>
                <div className="ui input">
                <input type="text" value={this.state.task} onChange={e=>this.setState({
                    task:e.target.value
                })} placeholder="Your task"/>
                <button className="ui primary button basic" onClick={
            ()=>this.onSubmitClick()
                }>Submit</button>
                </div>
                <div className="ui cards">
                    <div className="card">
                        <div className="content">
                        <div className="meta">
        Friends of Veronik
      </div>
      <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button">Approve</div>
        <div className="ui basic red button" onClick={
            ()=>this.onDeleteClick()
        }>Decline</div>
      </div>
    </div>
  </div>
</div>
</div>
</div>   
        )}}
export default TaskList;