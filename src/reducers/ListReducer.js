import React, {createContext, useReducer} from 'react'

const InitialState = {data : [] , page: '1' , query: null}
const AppContext = createContext(InitialState);

const {Provider} = AppContext

const StateProvider = ({children}) => {
    const [state,dispatch] = useReducer( (state, action) => {
        if(action.type==="LIST"){
            return action.payload
        }else if(action.type==="SEARCH"){
            return action.payload
        }
        return state
    }, InitialState)

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
}

export {AppContext , StateProvider}


