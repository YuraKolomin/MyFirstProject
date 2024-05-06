import React from "react";
import profileReducer from "./profile_reducer";
import dialogsReducer from "./dialogs_reducer";
import sidebarReducer from "./sidebar_reducer";


let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    message: 'Hi, how are you?',
                    likesCount: 12,
                    image: "https://sun9-41.userapi.com/impg/EH_PVceK9lE6RYuwGvLanv8T3HjocsLuqxN3OQ/1jM0bjJDzPE.jpg?size=1438x1600&quality=96&sign=bd8d217871be78455ab08254ed141d98&c_uniq_tag=DY-yYwj0B6RgU1H-_QrYh0_gY1ZOFw4GU1nlD33MTX4&type=album"
                },
                {
                    id: 2,
                    message: 'It\'s my first post',
                    likesCount: 15,
                    image: "https://narisyu.cdnbro.com/posts/552946-korgi-risunok-dlia-srisovki-1.jpg"
                },
            ],
            mainBackground: "https://gas-kvas.com/uploads/posts/2023-02/1675420044_gas-kvas-com-p-fonovii-risunok-les-5.jpg",
            newPostText: "You are aboba"


        },

        dialogsPage: {
            dialogs: [
                {
                    id: 1,
                    name: 'Yura',
                    avatar: 'https://avatars.mds.yandex.net/i?id=e0e78050202c066e733ca01a212da117cfffec8f-9869529-images-thumbs&n=13'
                },
                {
                    id: 2,
                    name: 'Nikita',
                    avatar: 'https://avatars.mds.yandex.net/i?id=a4cf56ecc735c06b79ad30e117a5eaf2052bdf52-10414202-images-thumbs&n=13'
                },
                {
                    id: 3,
                    name: 'Sasha',
                    avatar: 'https://avatars.mds.yandex.net/i?id=680df75f7d715be6d802fe902c3a3b32ce513a25-10806805-images-thumbs&n=13'
                },
                {
                    id: 4,
                    name: 'Roma',
                    avatar: 'https://avatars.mds.yandex.net/i?id=e0f1b12314c314c364133d82e8770a4a2963b26f-4451358-images-thumbs&n=13'
                },
                {
                    id: 5,
                    name: 'Katya',
                    avatar: 'https://avatars.mds.yandex.net/i?id=4b70586880fc9fd0e844aeed6668883fef33f280-12614240-images-thumbs&n=13'
                },
                {
                    id: 6,
                    name: 'Slava',
                    avatar: 'https://avatars.mds.yandex.net/i?id=e7ae7a820eece9f65b1b10bb5c315d1f9cabd48e-10393597-images-thumbs&n=13'
                }
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How are you?'},
                {id: 3, message: 'Yeah'}

            ],
            newMessageText: "Write something!"
        },

        sidebar: {
            friends: [
                {
                    id: 1,
                    name: 'Yura',
                    avatar: 'https://avatars.mds.yandex.net/i?id=e0e78050202c066e733ca01a212da117cfffec8f-9869529-images-thumbs&n=13'
                },
                {
                    id: 2,
                    name: 'Nikita',
                    avatar: 'https://avatars.mds.yandex.net/i?id=a4cf56ecc735c06b79ad30e117a5eaf2052bdf52-10414202-images-thumbs&n=13'
                },
                {
                    id: 3,
                    name: 'Sasha',
                    avatar: 'https://avatars.mds.yandex.net/i?id=680df75f7d715be6d802fe902c3a3b32ce513a25-10806805-images-thumbs&n=13'
                }
            ]
        }
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer( this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer( this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer( this._state.sidebar, action);
        this._callSubscriber(this._state);

    }
}

window.state = store;