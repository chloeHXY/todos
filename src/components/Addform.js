import React,{useState} from "react";

function Addform(props){
    const[taskname,settaskname]=useState('');
    let ifUse = false;
    function onsubmit(e){
        const judge=/^(?!(\s+$))/;
        e.preventDefault();
        if(judge.test(taskname)&&(taskname!=='')){
            props.getName(taskname);
        }else{
            ifUse=true;
            alert("请输入具体内容");
        }
        settaskname('');
    }
    return(
            <form onSubmit={onsubmit} className="first_form">
                <input type="text" className="addtask" value={taskname} onChange={(e)=>{settaskname(e.target.value);}}/>
                <button className="addbutton" disabled={ifUse}>Add</button>
            </form>
        );
}
export default Addform;