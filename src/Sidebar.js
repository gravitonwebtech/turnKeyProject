// import React,{useState} from 'react'
// import {BiChevronLeft} from "react-icons/bi";
// import Personall  from "./components/Personall";
// import SidebarData from './components/SidebarData';
// const Sidebar = () => {
//     const [toggle, setToggle] = useState(false);
//   return (
//   <>
//   <div className={`${toggle ? "w-[5.8rem]": " "} bg-white h-[96%] w-[19rem]  rounded-3xl ml-6 p-4 border mx-auto transition-all duration-500 border-solid
//     border-glass relative`}>

//       <Personall toggle={toggle}/>
//       <SidebarData toggle={toggle}/>
//     <div className='absolute top-[7rem] flex justify-center items-center -left-5 w-10 h-10 bg-white rounded-full cursor-pointer' onClick={()=>{setToggle(!toggle)}}>
//         <BiChevronLeft className={`${toggle ? "rotate-180" : ""} text-3xl`}/>
//     </div>
//   </div>
//   </>
//   )
// }

// export default Sidebar