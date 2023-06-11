import { useReducer } from 'react';
import './App.css';
import Header from "./components/Header"

const reducer = (state,action)=>{
  if(action.type == "INC"){
    return state + 2;
  }else if(action.type == "DEC"){
    return state - 1;
  }else{
    return state * 2;
  }
}

function App() {

  const [state,dispatch]  =  useReducer(reducer,0);

  return (
    <div className="App">
    <Header />
    <div className='bd'>
    <h1>{state}</h1>
    <button onClick={()=> dispatch({type:"INC"})}>Increment By 2</button>
    <button onClick={()=> dispatch({type:"DEC"})}>Decrement By 1</button>
    <button onClick={()=> dispatch({type:"MUL"})}>Multiply By 2</button>
    </div>
    </div>
  );
}

export default App;
