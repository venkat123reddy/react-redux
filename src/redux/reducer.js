

const intialState = {
    count : 0
}

export const countReducer = (state=intialState,action) => {

    switch(action.type) {
        case 'INC' : return {count : state.count+1}
        case 'DSC' : return {count : state.count-1}
        default : return state
    }
}