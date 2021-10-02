import {useEffect, useState} from "react";
import {nanoid} from "nanoid";
import React from "react";
import ReactDOM from 'react-dom';
import Addform from "./components/Addform";
import Task from "./components/Task";
import Begin from "./components/Begin";
function App() {
    const[tasks,settasks]=useState([]);
    const[backBegin,setbackBegin]=useState(true);
    function getName(name){
        const newtask={name:name, id:"task"+nanoid(),ifEditing:false};
        setbackBegin(false);
        //现有手段，无法直接在父组件中获取到子组件的属性值
        //所以，直接子组件中的属性，主要是让子组件通过props调用获取
        //故不要让state变量含有组件，这样操作会变得复杂
        settasks([...tasks,newtask]);
    }
    const compList=tasks.map((task)=>{
        return <Task name={task.name} id={task.id} key={task.id} deleteTask={useDeleteTask} ifEditing={task.ifEditing} changeUI={changeUI} savename={savename} cancelWork={cancelWork} backBegin={backBegin}/>
    })

    function cancelWork(id){
        settasks(tasks.map((task)=>{
            if(task.id===id){return {name:task.name, id:task.id,ifEditing:!task.ifEditing};}
            else return task;
        }))
    }

    function savename(id,name){
        settasks(tasks.map((task)=>{
            if(task.id===id){return {name:name, id:task.id,ifEditing:!task.ifEditing};}
            else return task;
        }))
    }
    function changeUI(id){
        settasks(tasks.map((task)=>{
            if(task.id===id){return {name:task.name, id:task.id,ifEditing:!task.ifEditing};}
            else return task;
        }))
    }
    // function useDeleteTask(id){
    //     useEffect(
    //         ()=>{settasks(tasks.filter((task)=>task.id!==id))}
    //     );
    //     if(tasks.length===0){setbackBegin(true);}
    // }
    function useDeleteTask(id){
        settasks(tasks.filter((task)=>task.id!==id));
        //上一步用usestate对数据进行更新，下一步想使用更新后的相关信息
        //采用创建新变量的方式实现
        //todo:尝试用useeffect实现  理解异步回调的知识
        let con=tasks.length;
        if(--con===0){setbackBegin(true);}
    }
  return (
    <div className="App">
          <h1>TODO</h1>
            <Addform getName={getName}/>
        <div className="todo">
            <ul>
                {backBegin?<Begin/>:compList}
            </ul>
        </div>
    </div>
  );
}
export default App;
