import { useEffect, useState } from "react";
import { addToDo, deleteToDo, getAllToDo, updateToDo } from "./utils/handleapi";
import ToDo from "./components/ToDo"

//
function App() {

  const [toDo, setToDo] = useState([])
  const [text, setText] =  useState("")
  const [isUpdating, setIsUpdating] = useState(false)
  const [toDoId, setToDoiD] = useState("")

  useEffect(() => {
    getAllToDo(setToDo)
  }, [])

  const updateMode = (_id, text) => {
      setIsUpdating(true)
      setText(text)
      setToDoiD(_id)
  }


  return (
    <div className="App">
      <div className="top">
      <h1>ToDo</h1>
      <input type="text" placeholder="ENTER TO-DO ITEM" value={text} onChange={(e)=> setText(e.target.value)}></input>
      <button id="add-button" onClick={ isUpdating ? () => updateToDo(toDoId, text, setText, setToDo, setIsUpdating) : () => addToDo(text, setText, setToDo)}>
        {isUpdating ? "Update" : "Add"}
      </button>
      </div>

      <div className="todo-list">
        {
          toDo.map((item) => 
          <ToDo text= {item.text}
          key={item._id}
          updateMode = {() =>  updateMode(item._id, item.text)}
          deleteToDo = {() =>  deleteToDo(item._id, setToDo)}/> )
        }
      </div>


    </div>
  );
}

export default App;
