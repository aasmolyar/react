let store = {
  _state: {
    profilePage: {
      posts: [
          {id: 1, message: 'Hi, how are you', likesCount: 12},
          {id: 2, message: 'Hi, how are you', likesCount: 14},
        ],
      newPostText: 'it-kamasutra.com',
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
    return this._state
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch (action) {

    if (action.type === ' ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 3
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state); 

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }
  },
};


export default store;

window.store = store;
