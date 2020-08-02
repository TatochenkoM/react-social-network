import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";

let store = {
    _state:{
        profilePage: {
            posts: [
                {message:'Hi, how are u?', like:'1', id:1},
                {message:'Hi, how are u?', like:'2', id:2}
            ],
            newPostText: ''
        },
        dialogsPage: {
            dialogData: [
                {name:'Inna', id:'1'},
                {name:'Igor', id:'2'},
                {name:'Sergei', id:'3'},
                {name:'Anton', id:'4'}
            ],
            messages: [
                {message:'Hi', id:'2'},
                {message:'Hi', id:'1'},
                {message:'Hi', id:'3'},
                {message:'Hi', id:'4'}
            ],
            newMessageText: ''
        }     
    },
    _renderEntireTree () {
    },
    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._renderEntireTree = observer;
    },
    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        
        this._renderEntireTree(this._state);
    }

}
  
export default store;