const ADD_POST = 'ADD-POST';
const UPD_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_USER_STATUS = 'SET-USER-STATUS';

let initialState = {
        posts: [
            {message:'Hi, how are u?', like:'1', id:1},
            {message:'Hi, how are u?', like:'2', id:2}
        ],
        newPostText: '',
        profile: null,
        status: null,
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            let newPost = {
                message: state.newPostText,
                like:'0', 
                id:3
            };
                return {
                    ...state,
                    newPostText: '',
                    posts: [...state.posts,newPost]
                };
        case UPD_POST:
            return {
                ...state,
                newPostText: action.newText,
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
         type : ADD_POST
    }
}
export const updatePostActionCreator = (text) => {
    return {
         type : UPD_POST, newText: text
    }
}
export const setUserProfile = (profile) => {
    return {
         type : SET_USER_PROFILE, profile
    }
}
export const setUserStatus = (status) => {
    return {
         type : SET_USER_STATUS, status
    }
}
export default profileReducer;