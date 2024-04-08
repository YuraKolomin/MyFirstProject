import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunk} from "../../redux/profile_reducer";
import {Navigate, useParams} from "react-router-dom";


function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 2;
    }
    useEffect(() => {
        props.setUserProfileThunk(userId)
    }, [userId]);
    if (!props.isAuth) return <Navigate to="/login" />
    return <div>
        <Profile profile={props.profile}/>
    </div>;
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile,
isAuth: state.auth.isAuth});


export default connect(mapStateToProps, {setUserProfileThunk})(ProfileContainer);