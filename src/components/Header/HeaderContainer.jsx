import React, {useEffect} from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthThunk} from "../../redux/auth_reducer";

function HeaderContainer(props) {
    useEffect(() => {
        props.getAuthThunk();
    },);
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, login: state.auth.login
});
export default connect(mapStateToProps, {getAuthThunk})(HeaderContainer);