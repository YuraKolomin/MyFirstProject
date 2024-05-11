import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React, {lazy, Suspense, useEffect} from "react";
//import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
//import UsersContainer from "./components/Users/UsersContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app_reducer";
import Preloader from "./components/Common/Preloader/Preloader";
const DialogsContainer = lazy(() => import('././components/Dialogs/Message/DialogsContainer'));
const ProfileContainer = lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'));
function App (props) {
    useEffect(() => {
        props.initializeApp();
    });
    if (!props.initialized) {
        return <Preloader />
    }
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar sidebar={props.store}/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/dialogs/*" element={<Suspense fallback={<div><Preloader/></div>}> <DialogsContainer store={props.store}/> </Suspense>}/>
                        <Route path='/profile/:userId?' element={<Suspense fallback={<div><Preloader/></div>}> <ProfileContainer store={props.store}/> </Suspense>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<Suspense fallback={<div><Preloader/></div>}> <UsersContainer/> </Suspense>}/>
                        <Route path="/login" element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})
export default compose (connect(mapStateToProps, {initializeApp}))(App);
