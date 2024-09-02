import axios from 'axios'

const baseurl = "http://localhost:5000"

const getAllToDo = async (setToDo) => {
    try {
    const response = await axios.get(baseurl);
    console.log('Data:', response.data);
    setToDo(response.data)
  } catch (error) {
    console.error('Error:', error);
  }
}

const addToDo = async (text,setText,setToDo) => {
    try {
    axios.post(`${baseurl}/save`, {text})
    .then((data)=>{
        setText("")
        getAllToDo(setToDo)
    })
  } catch (error) {
    console.error('Error:', error);
  }
}

const updateToDo = async (toDoId, text, setText, setToDo, setIsUpdating) => {
    try {
    axios.put(`${baseurl}/update`, {_id: toDoId, text})
    .then((data)=>{
        setText("")
        setIsUpdating(false)
        getAllToDo(setToDo)
    })
  } catch (error) {
    console.error('Error:', error);
  }
}

const deleteToDo = async (_id, setToDo) => {
    try {

    axios.delete(`${baseurl}/delete/${_id}`)
    .then((data)=>{
        getAllToDo(setToDo)
    })
  } catch (error) { 
    console.error('Error:', error);
  }
}

export {getAllToDo,addToDo,updateToDo,deleteToDo}