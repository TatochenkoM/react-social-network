import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogReducer";
import usersReducer from "./usersReduser";
import authReducer from "./authReducer";
const { createStore, combineReducers } = require("redux");

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
});
let store = createStore(reducers);

export default store;