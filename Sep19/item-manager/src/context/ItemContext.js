// REDUCER

const { createContext, useReducer } = require("react")

// initial state
const initialState = {
    items:[]
}
// actions
const actions = {
    ADD_ITEM : "ADD_ITEM",
    REMOVE_ITEM : "REMOVE_ITEM"
}
// reducer function
const reducer = (state, action)=>{
    switch(action.type){
        case actions.ADD_ITEM :
            return{
                items:[
                    ...state.items,
                    {
                        name:action.item_name,
                        description:action.item_desc
                    }
                ]
                
            }
            case actions.REMOVE_ITEM :
                const removed = state.items.filter((item)=>item.name !== action.item_name)
                return{
                    items: removed
                }
        
    }
}


// CREATE CONTEXT AND PROVIDER TO MAKE STATE GLOBALLY AVAILABLE

// create context

export const ItemManagerContext = createContext();

export const ItemManagerProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = {
        items : state.items,
        addItem : (item_name, item_desc) => {
            dispatch({type: actions.ADD_ITEM, item_name, item_desc})
        },
        removeItem : (item_name) => {
            dispatch({type: actions.REMOVE_ITEM, item_name})
        }
    }

    return(
        <ItemManagerContext.Provider value={value}>
            {children}
        </ItemManagerContext.Provider>
    )
}