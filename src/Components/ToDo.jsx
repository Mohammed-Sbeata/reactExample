import React from "react";
export function ToDo(){
  const [tasks, setTasks] = React.useState([])
  const [input, setInput] = React.useState('')
  const handleSubmit = ()=>{
    setTasks([...tasks,{
        id:tasks.length+1, 
        discription : input
    }])
  }
  const handleDelete = (id) => {

    const filteredTasks = tasks.filter((ele) => ele.id !== id)
    setTasks([...filteredTasks])
  }
  return (
    <div>
    <input type="text" onChange={(e)=>setInput(e.target.value)} />
    <button onClick={()=>handleSubmit()}>Add</button>
    <div>
        {tasks.map((el) => {
          return (
            <>
            <div>
              <p>{el.discription}</p>
              <button onClick={()=>handleDelete(el.id)}>DELETE</button>
            </div>
            </>
          )
        })}
    </div>
    </div>
)
}