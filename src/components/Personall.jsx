import React from 'react'
import user from "../personalimage/user.png"
const Personall = ({toggle}) => {
  return (
  <>
  <div className={`flex gap-5 items-center ${ toggle ? "bg-none  transition-allduration-300 delay-200" : "bg-white rounded-xl p-2"}`}>
  <div className='min-w-[3.5rem] h-[3.5rem]'>
    <img src={user} alt="images" className='w-full h-full rounded-full object-cover '/>
  </div>
</div>
<div className={`toggle ? "opacity-0 delay-200" : ""`}>
  <div className="text-xl">Hello Lucia</div>
</div>
  </>
  )
}

export default Personall