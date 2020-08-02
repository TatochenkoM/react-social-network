import React from 'react';
import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading, toggleIsFollowing} from '../../redux/usersReduser';
import Preloader from '../common/Preloader/Preloader';
import { getUsers } from '../../API/api';


class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleIsLoading(true);

        getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsLoading(false);
                this.props.setUsers (data.items);
                this.props.setTotalUsersCount (data.totalCount);
            }); 
    };
    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.toggleIsLoading(true);

            getUsers(page, this.props.pageSize)
                .then(data => {
                    this.props.toggleIsLoading(false);
                    this.props.setUsers (data.items);
                }); 
    };

    render() {
        return(
            <>
                {this.props.isLoading ? <Preloader/> : null }
                <Users 
                    onPageChanged = {this.onPageChanged} 
                    users = {this.props.users}
                    totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                    isFollowing = {this.props.isFollowing}
                    toggleIsFollowing =  {this.props.toggleIsFollowing}/>
            </>
            ) 
    }
}

let mapStateToProps = (state) => {
     return {
         users: state.usersPage.users,
         pageSize: state.usersPage.pageSize,
         totalUsersCount: state.usersPage.totalUsersCount,
         currentPage: state.usersPage.currentPage,
         isLoading: state.usersPage.isLoading,
         isFollowing: state.usersPage.isFollowing,
     }
};

export default connect (mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsLoading,
    toggleIsFollowing,
}) (UsersAPIComponent);