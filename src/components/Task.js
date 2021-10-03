import React,{useState} from "react";
import tupian from "../tu.png"
function Task(props){
    const[newTaskname,setnewTaskname]=useState(props.name);

    function onsubmit(e){
        e.preventDefault();
        props.savename(props.id,newTaskname);
        // setnewTaskname(props.name);
    }
    // const relax=<div className="begin">
    //     <img src={tupian} alt="图片">
    //     </img>
    //     栖栖一代，所欲为何？添加新任务前先思考思考吧
    // </div>
    const pre=<li>
        <input type="checkbox" name="" onChange={(e)=>{
            props.ifChecked();}}/>{props.name}
        <button type="button" id="edit" onClick={()=>props.changeUI(props.id)}>
            &#xe600;
        </button>
        <button type="button" id="delete" onClick={()=>{props.deleteTask(props.id)}}>
            &#xe74b;
        </button>
    </li>
    const edit=<li>
        <form onSubmit={onsubmit}>
        <input type="text" placeholder="NewTaskName" value={newTaskname} onChange={(e)=>{setnewTaskname(e.target.value)}}/>
        <button type="submit" id="save" >
            &#xec09;
        </button>
        <button type="button" id="cancel" onClick={()=>{props.cancelWork(props.id);setnewTaskname('');}}>
            &#xe662;
        </button>
        </form>
    </li>
    return(
        props.ifEditing?edit:pre
    );
}
export default Task;
//setCheck(!check);checked={check},const[check,setCheck]=useState(false);