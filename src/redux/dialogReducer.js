const ADD_MESSAGE = 'ADD-MESSAGE';
const UPD_MESSAGE = 'UPDATE-MESSAGE';

let initialState = {
        dialogData: [
            {name:'Inna', id:'1'},
            {name:'Igor', id:'2'},
            {name:'Sergei', id:'3'},
            {name:'Anton', id:'4'}
        ],
        messages: [
            {message:'Hi', id:'1'},
            {message:'Hi', id:'2'},
            {message:'Hi', id:'3'},
            {message:'Hi', id:'4'}
        ],
        newMessageText: ''    
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.newMessageText,
                id:5
            };
               return {
                    ...state,
                    messages: [...state.messages, newMessage],
                    newMessageText: '',
                }
        case UPD_MESSAGE:
            return {
                ...state,
                newMessageText: action.newText,
            }
        default:
            return state;

    }
}


export const addMessageActionCreator = (text) => {
    return {
         type : ADD_MESSAGE
    }
}
export const updateMessageActionCreator = (text) => {
    return {
         type : UPD_MESSAGE, newText: text
    }
}
export default dialogsReducer;