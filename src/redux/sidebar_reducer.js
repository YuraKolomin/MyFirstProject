
let initialState = {
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
};
const sidebarReducer = (state = initialState, action) => {

    return state;
}
export default sidebarReducer;