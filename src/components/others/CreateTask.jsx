import React, { useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'
import { useContext } from 'react'

const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskdate, setTaskdate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [taskDescription, setTaskDescription] = useState('')


  const [newTask, setNewTask] = useState({})


 const submitHandler = (e) =>{
  e.preventDefault()
  
  setNewTask({taskTitle, taskDescription, taskdate, category, active:false, newTask:true, failed:false, completed:false})
 const data =  userData 
   

  data.forEach(function(elem){
    if(assignTo == elem.name ){
      elem.tasks.push(newTask)
      elem.taskCounts.newTask = elem.taskCounts.newTask+1 
    }
  })
  setUserData(data)
  


  setAssignTo('')
  setCategory('')
  setAssignTo('')
  setCategory('')
  setTaskTitle('')
  setTaskDescription('')
  
}

  return (
    <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
        <form onSubmit={(e)=>{submitHandler(e)}} action="" className="flex flex-wrap items-start justify-between ">
          <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input 
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="Provide a task" />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input 
            value={taskdate}
            onChange={(e) => setTaskdate(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="date" />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
            <input 
            value={assignTo}
            onChange={(e) => setAssignTo(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="employee name" />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" type="text" placeholder="design, dev etc" />
          </div>

          </div>
          

          <div className="w-2/5 flex flex-col items-start">
            <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
            <textarea 
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px]" name="" id="" cols="30" rows="10"></textarea>
            <button className="bg-emerald-500 py-3 hover:bg-emerald-700 px-5 rounded text-sm mt-4 w-4/5 items-center">Create Task</button>
          </div>

          

          

        </form>
      </div>
  )
}

export default CreateTask