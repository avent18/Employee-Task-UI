import React , { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const Alltalks = () => {

    const [userData, setUserData] = useContext(AuthContext)
    // console.log(authData) 


  return (
    <div id='taskList' className='bg-[#1c1c1c] p-5 rounded mt-5 gap-4 h-60 '>
  <div className="bg-gray-800 mb-5  py-2 px-4 flex justify-between rounded">
  <h2 className='w-1/5'>Employee Name</h2>
  <h3 className='w-1/5'>New Task</h3>
  <h5 className='w-1/5'>Active task</h5>
  <h5 className='w-1/5'>Completed</h5>
  <h5 className='w-1/5'>Failed</h5>
  </div>

<div id='scrollbar' className='h-[80%] overflow-auto'>
  {userData.map(function(elem, key){
  return <div  key={key} className="border-2 border-emerald-900 mb-5  py-2 px-4 flex justify-between rounded">
  <h2 className='w-1/5 text-red-600'>{elem.name}</h2>
  <h3 className='w-1/5 text-yellow-600'>{elem.taskCount.newTask}</h3>
  <h5 className='w-1/5 text-green-600'>{elem.taskCount.active}</h5>
  <h5 className='w-1/5 text-white-600'>{elem.taskCount.completed}</h5>
  <h5 className='w-1/5 text-red-600'>{elem.taskCount.failed}</h5>
  </div>
})}
</div>
       

    </div>
  )
}

export default Alltalks