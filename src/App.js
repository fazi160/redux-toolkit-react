// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementby5, decrementby5 } from './features/counterSlice';
import Form from './form';

function App() {
  const {count1, count2} = useSelector((state) =>state.counter)
  const {name, age} = useSelector(state => state.form)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <h2>Count : {count1} </h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>

      <br />
      <br />
      <h2>Count : {count2} </h2>
      <button onClick={()=>dispatch(incrementby5())}>Increment by 5</button>
      <button onClick={()=>dispatch(decrementby5())}>Decrement by 5</button>

      <br />
      <Form/>
      <br />
      
        name : {name}
        <br />
        age : {age}
      
    </div>
  );
}

export default App;
