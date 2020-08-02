import React from 'react';
import style from './App.module.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <HeaderContainer />
        <div className={style.content}> 
          <Route path='/profile/:userId?' 
            render={()=><ProfileContainer />}/> 
          <Route path='/dialogs' 
            render={()=><DialogsContainer />} /> 
          <Route path='/users' 
            render={()=><UsersContainer />} /> 
        </div>
      </div>
    </BrowserRouter> 
  );
}

export default App;
