import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
     let postsData = props.posts.map(
          (m) => {
               return (
                    <Post message={m.message} like={m.like} key={m.id}/>
               )
          }
     );
     const newPostElement = React.createRef();
     const addPost = () => {
          props.addPost();

     }
     const onPostChange = () => {
          let text = newPostElement.current.value;
          props.updateNewPostText(text);
     }

    return (
        <div className={style.posts}>
           <div className={style.newPosts}>
               <div className={style.createPost}>
                    <h3>My posts</h3>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
               </div>
               <div className={style.createBtn}>
                    <button className={style.btn} onClick={addPost}>Add Post</button>
               </div>
           </div>
           <div className={style.posts}>
                {postsData}
           </div>
        </div> 
)}
export default MyPosts;