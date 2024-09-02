import React from 'react'

import {BiEdit} from "react-icons/bi"
import {AiFillDelete} from "react-icons/ai"

const ToDo = ({text, updateMode, deleteToDo}) => {
  return (
    <div className='todo-item'>
        <div className="todo-text">{text}</div>
        <div className="icons">
            <BiEdit className='icon_update' onClick={updateMode}/>
            <AiFillDelete className='icon_delete' onClick={deleteToDo}/>
        </div>
    </div>
  )
}

export default ToDo
