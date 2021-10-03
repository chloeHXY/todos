import React from "react";
import {useEffect, useState} from "react";
function Switch(props){
    return(
        <div className="switch">
            <button type="button" name="All" onClick={(e)=>props.switchName(e.target.name)}>All</button>
            <button type="button" name="Completed" onClick={(e)=>props.switchName(e.target.name)}>Completed</button>
            <button type="button" name="Active" onClick={(e)=>props.switchName(e.target.name)}>Active</button>
            <em>还剩下{props.taskNum}个任务</em>
        </div>
    );
}
export default Switch;