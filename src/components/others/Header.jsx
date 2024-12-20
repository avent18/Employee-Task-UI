import React, { useState } from 'react'

const Header = (props)=> {
  
// const [username, setUsername] = useState("")

// if(!data){
//   setUsername('Admin')
// }else{
//   setUsername(data.name)
// }

const logOutuser = ()=>{
  localStorage.setItem('loggedInUser','')
  props.changeUser('')
}


  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl'>Hello<br /><span className='text-3xl font-semibold'>username 💀</span></h1>
      <button onClick={logOutuser} className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm hover:bg-red-800'>LogOut</button>
    </div>
  )
}

export default Header