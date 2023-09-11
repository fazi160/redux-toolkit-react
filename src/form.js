import { useState } from "react"
import { useDispatch } from "react-redux"
import { submit } from "./features/formSlice"




const Form = () =>{
    const [name, setName] = useState("")
    const [age,setAge] = useState(0)
    const dispatch = useDispatch()
    return(
        <>
        <input
         type="text"
         placeholder="name"
         value={name}
         onChange={(e) => setName(e.target.value)} />

        <input type="number"
        placeholder="age"
        value={age}
        onChange={(e) => setAge(e.target.value)} />
        <button onClick={()=> dispatch(submit({name, age}))}>Submit</button>
        </>
    )


}

export default Form