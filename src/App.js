// import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from './features/counterSlice';

function App() {
  const {count1} = useSelector((state) =>state.counter)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <h2>Count : {count1} </h2>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
