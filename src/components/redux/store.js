import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
  _state: {

    profilePage: {
      posts: [
          {id: 1, message: 'Hi, how are you', likesCount: 12},
          {id: 2, message: 'Hi, how are you', likesCount: 14},
        ],
      newPostText: '',
  },

  dialogsPage: {          
      dialogs: [
          {id: 1, name: 'Dusha'},
          {id: 2, name: 'Den'},
        ],
      messages: [
          {id: 1, message: 'Hi'},
          {id: 2, message: 'How'},
        ],

      newMessageBody: '',

      photo: [
          {id: 1, photo: "https://img.icons8.com/?size=1x&id=13042&format=png" },
          {id: 2, photo: "https://img.icons8.com/?size=1x&id=13042&format=png" },
        ],
  },

  sideBar: {

  }
},

_callSubscriber() {
  console.log('State changed');
},

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer; 
  },

  dispatch (action) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sidebarReducer(this._state.sideBar, action);
    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
