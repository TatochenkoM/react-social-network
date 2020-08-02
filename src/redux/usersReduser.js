const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_IS_LOADING = 'TOGGLE-IS-LOADING';
const TOGGLE_IS_FOLLOWING = 'TOGGLE-IS-FOLLOWING';


let initialState = {
        users: [
        ],
        pageSize: 20,
        totalUsersCount: 0,
        currentPage: 1,
        isLoading: false,
        isFollowing: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( 
                        (user)=>{
                            if(user.id === action.userId)  {
                                return {...user, followed: true}
                            }
                        return user;
                        })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( 
                        (user)=>{
                            if(user.id === action.userId) {
                                return {...user, followed: false}
                            }
                        return user;
                        })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case TOGGLE_IS_LOADING:
            return {...state, isLoading: action.isLoading}
        case TOGGLE_IS_FOLLOWING:
            return {...state, 
                isFollowing: action.isFollowing 
                ? [...state.isFollowing, action.userId]
                : state.isFollowing.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const follow = (userId) => {
    return {
         type : FOLLOW,
         userId
    }
}
export const unfollow = (userId) => {
    return {
         type : UNFOLLOW,
         userId
    }
}
export const setUsers = (users) => {
    return {
         type : SET_USERS,
         users
    }
}
export const setCurrentPage = (currentPage) => {
    return {
         type : SET_CURRENT_PAGE,
         currentPage
    }
}
export const setTotalUsersCount = (totalUsersCount) => {
    return {
         type : SET_TOTAL_COUNT,
         totalUsersCount
    }
}
export const toggleIsLoading = (isLoading) => {
    return {
         type : TOGGLE_IS_LOADING,
         isLoading
    }
}
export const toggleIsFollowing = (isFollowing, userId) => {
    return {
         type : TOGGLE_IS_FOLLOWING,
         isFollowing,
         userId
    }
}

export default usersReducer;