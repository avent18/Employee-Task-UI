import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../Task_List/TaskList'

const EmployeeDashboard = (props) => {
  
  return (
    <div className='p-20 bg-[#1c1c1c] h-screen'>
      
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={props.data} />
      <TaskList data={props.data} />
    </div>
  )
}

export default EmployeeDashboard