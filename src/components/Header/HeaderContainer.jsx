import React, {useEffect} from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setUserData} from "../../redux/auth_reducer";
import {UserLog} from "../../api/api";

function HeaderContainer(props) {
    console.log(props)
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response) => {
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    props.setUserData(id, email, login)
                }
            });


    },);
    return <Header {...props} />
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth, login: state.auth.login
});
export default connect(mapStateToProps, {setUserData})(HeaderContainer);