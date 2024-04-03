import './App.css';
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
<<<<<<< HEAD
import DialogsContainer from "./components/Dialogs/Message/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
=======
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar sidebar={props.store}/>
                <div className='app-wrapper-content'>
                    <Routes>
<<<<<<< HEAD
                        <Route path="/dialogs/*" element={<DialogsContainer store={props.store}/>}/>
                        <Route path='/profile/:userId?' element={<ProfileContainer store={props.store}/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
=======
                        <Route path="/Dialogs/*" element={<Dialogs
                            dispatch={props.dispatch}
                            state={props.state.dialogsPage}/>}/>
                        <Route path="/Profile" element={<Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
>>>>>>> 7ebe7c62a6672348477b643f695ba75e7fddd185
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;
