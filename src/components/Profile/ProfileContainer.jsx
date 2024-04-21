import React, {useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatusThunk, setUserProfileThunk, updateStatusThunk} from "../../redux/profile_reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


function ProfileContainer(props) {
    let {userId} = useParams();
    if (!userId) {
        userId = 30910;
    }
    useEffect(() => {
        props.setUserProfileThunk(userId)
            props.getStatusThunk(userId)
    }, [userId]);
    return <div>
        <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatusThunk}/>
    </div>;
}

let mapStateToProps = (state) => ({profile: state.profilePage.profile,
    status: state.profilePage.status
});
export default compose(
    connect(mapStateToProps, {setUserProfileThunk, updateStatusThunk, getStatusThunk}),
    withAuthRedirect
)(ProfileContainer);





