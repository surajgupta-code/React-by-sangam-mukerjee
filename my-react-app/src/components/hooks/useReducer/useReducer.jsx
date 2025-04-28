import { useReducer } from "react"
function reducer(state, action){
         switch (action.type) {
            case 'add':
                return{
                 ...state,
                 count : state.count +1
                }
            case 'subtract':
                return{
                  ...state,
                  count : state.count-1  

                }   
            case 'reset':     
                return{
                  ...state,
                  count: state.count=0 
                }
            case 'show':
                return{

                }    
         }
}
const initialState = {
    count : 0
}
function UseReducerHook(){
        
    const [state, dispatch]=useReducer(reducer, initialState)

    return(
        <div>
            <h1>Use Reducer  Hook</h1>
            <div style={{display:"flex", gap: "10px", justifyContent: "center"}}>
                <button onClick={()=>dispatch({type :'add'})}>Increase Count</button>
                <button onClick={()=>dispatch({type: 'decrease'})}>Decrease Count</button>
                <button onClick={()=>dispatch({type: 'Reset'})}>Reset Count</button>
                <button onClick={()=>dispatch({type: 'show'})}>Show Count</button>
            </div>
        </div>
    )
}