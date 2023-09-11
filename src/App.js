// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementby5, decrementby5 } from './features/counterSlice';

function App() {
  const {count1, count2} = useSelector((state) =>state.counter)
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
      <button onClick={()=>dispatch(incrementby5())}>Increment</button>
      <button onClick={()=>dispatch(decrementby5())}>Decrement</button>

    </div>
  );
}

export default App;
