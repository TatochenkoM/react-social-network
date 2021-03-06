import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {setAuthUserData} from '../../redux/authReducer';
import { authUser } from '../../API/api';

class HeaderContainer extends React.Component {

    componentWillMount() {
        authUser()
                .then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        });
    }

    render(){
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => {
   return {
       isAuth: state.auth.isAuth,
       login: state.auth.login,
    }
}


export default connect (mapStateToProps,{setAuthUserData})(HeaderContainer);