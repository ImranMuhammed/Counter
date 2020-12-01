import React, { useReducer } from 'react';


const reducer=(state,action)=>{

  switch(action.type){
    case 'INCREMENT' : return {count:state.count+1};
    case 'DECREMENT' : return {count:state.count-1};
    case 'RESET' : return {count:0};
    default : return state;
  }
}

function App(){
  const[state,change]=useReducer(reducer,{count:0})

 const increment=()=>{
    change({type:'INCREMENT'})
  }

  const decrement=()=>{
    change({type:'DECREMENT'})
  }

  const reset=()=>{
    change({type:'RESET'})
  }
  return(
    <div className="container">
      <h1 className="counter">{state.count}</h1>
      <div className="buttons">
          <button onClick={decrement}>Decrease ( - )</button>
          <button onClick={reset}>Reset</button>
          <button onClick={increment}>Increase ( + )</button>
      </div>
      
    </div>
  )

}



export default App