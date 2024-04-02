import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../feature/Slicing'

function Addtodo() {
    const [input, setinput] = useState("")
    const dispatchInfo=useDispatch()

    const addtodoHandler= (e)=>{
        e.preventDefalut()
        dispatchInfo(addTodo(input))
        setinput('')
    }

  return (
    
    <form onSubmit={addtodoHandler}  className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={input}
        onChange={(e) => setinput(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
    </button>
</form>
  )
}

export default Addtodo