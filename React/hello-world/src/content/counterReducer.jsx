import React ,{useReducer} from 'react';

const counterReducer=(state,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            return state;
    }
}
const CouterApp=()=>{
    const [count,dispatch]=useReducer(counterReducer,0);
    return(
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>dispatch({type:'INCREMENT'})}>Increment</button>
            <button onClick={()=>dispatch({type:'DECREMENT'})}>Decrement</button>
        </div>
    );
}