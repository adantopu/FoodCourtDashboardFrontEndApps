import React, {useContext, useState} from 'react'
import { Context } from '../../context'
import { Link } from 'react-router-dom'
import {Data} from '../../dates/jummy'


const Sidebar = () => {
  let {state,dispatch} = useContext(Context)
  const [activeIcon, setActiveIcon] = useState('fa-solid fa-chart-pie')
  const [category, setCategory] = useState(Data[0].inside)
  const [activeCat, setActiveCat] = useState('Sales')

  const ClickedIcon =({icon,inside})=>{
    if (icon === activeIcon)
    {
      dispatch({type: 'SET_TOGGLE', payload: !state.toggle})
    }else{
      dispatch({type: 'SET_TOGGLE', payload: true})
      setActiveIcon(icon)
      setCategory(inside)
    }
  }

  return (
    <div className={`${state.toggleNavbar? 'block' : 'hidden'}`}>
      <div onClick={()=>{
        dispatch ({type: 'SET_TOGGLE_NAVBAR', payload: false})
      }} className="fixed md:hidden z-40 left-0 top-0 right-0 bottom-0 bg-slate-700 backdrop:blur-md opacity-60"></div>
      <div className="h-full z-50 fixed drop-shadow-2xl md:drop-shadow flex">
        <div className="flex-col overflow-hidden md:overflow-auto justify-start gap-4 flex bg-zinc-900 px-4 py-6 min-h-full">
          {Data.map((icon,index)=>{
            return(
              <div onClick={()=>{
                ClickedIcon(icon)
              }}className={`p-3.5 cursor-pointer ${activeIcon === icon.icon ? 'text-white bg-gradient-to-bl from-amber-500 to-pink-500':'text-neutral-400'} rounded-lg flex-col hover:text-white duration-300 items-center gap-2 flex`}><i className={`${icon.icon} text-xl w-6 h-6 text-center`}></i></div>
            )
          })}
        </div>
        <div className={`w-56 ${state.toggle ? 'block' : 'hidden'} h-full overflow-hidden md:overflow-auto py-6 bg-white border-r border-neutral-400 flex-col gap-4 inline-flex`}>
          {category.map(({text,icon,url},index)=>{
            return(
              <Link to={`/admin-dashboard/${url}`} key={index} onClick={()=>{setActiveCat(text)}} className={`self-stretch duration-300 cursor-pointer px-[18px] ${activeCat === text ? 'bg-orange-50 bg-opacity-80 border-r-2 border-orange-600': 'text-zinc-500 hover:bg-neutral-200'} py-3.5 items-center gap-3 inline-flex`}>
                <div className={`w-6 relative ${activeCat === text ? 'text-orange-600' : 'text-zinc-500'} text-xl`}>
                  <i className={icon}></i>
                </div>
                <div className={`grow shrink basis-0 ${activeCat === text ? 'text-orange-600 font-semibold':'text-zinc-500'} text-md leading=tight`}>{text}</div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Sidebar

