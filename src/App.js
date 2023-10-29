import './App.css';
import { useState } from "react"

const App = () => {
  
  const [tasks,setTasks] = useState([]);
  const [task,setTask] = useState("");

  const addTasks = () => {
    if(task !== ""){
      setTasks([...tasks,task])
      setTask("");
      console.log(tasks);
    }
  }

  const deleteTasks = (id) => {
    const updatedList = [...tasks];
    console.log('Automatic...')
    updatedList.splice(id,1)
    setTasks(updatedList)
  }

  return(
    <div  style={{height:'800px'}} className=" flex flex-col items-center bg-blue-200 ">
        <h1 className=" text-4xl m-12 font-bold"> Todo List</h1>
      <div className="p-2 ms-14 ">
        <input className=" bg-slate-100 rounded-md p-4 ms-10 " 
        type="text"
        value={task}
        onChange = {(e)=>{
          setTask(e.target.value);
        }}
        />
        <button onClick={addTasks} 
        className=" text-white p-3 m-3 rounded-md font-bold "><i class="fa-solid fa-circle-plus fa-2xl" style={{color:'black'}}></i></button>
      </div>
      <div>
          {tasks?.length > 0 ? (
              <ul>
                {
                  tasks.map((task,index)=>(
                    <div className=" flex bg-slate-100 m-4 py-4 pl-12 pr-4 rounded-md" key={index}>
                      <li className="self-center font-semibold  grow">{task}</li>
                      <button onClick={()=>{deleteTasks(index)}} 
                      className="  text-dark p-2 mx-1 rounded-md font-bold "><i class="fa-sharp fa-solid  fa-trash" style={{color:'red'}}  ></i></button>
                    </div>
                  ))
                }
              </ul>
          ):(
            <div>
              <p>No Task has been added</p>
            </div>
          ) }
      </div>
    </div>
  )
}

export default App