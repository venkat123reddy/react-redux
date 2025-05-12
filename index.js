const redux = require('redux');
const createStore = redux.legacy_createStore;

const BUY_CAKE = "buycake";

const iniitalCount = {
    cakeCount : 0
}
const cakeReducer = (state = iniitalCount,action) =>{

    switch(action.type) {
        case BUY_CAKE : return {
            ...state,
            cakeCount : state.cakeCount-1
        
        }
        default : return iniitalCount;
    }
}


const store = createStore(cakeReducer); 
console.log("initialState",store.getState);
