import {addPostActionCreator, updatePostActionCreator} from '../../../redux/profileReducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
    }
}
let mapDispatchToProps  = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostActionCreator(text));
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        },
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;