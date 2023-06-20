import {rerenderEntireTree} from '../../render.js';

let state = {

    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 12},
            {id: 2, message: 'Hi, how are you', likesCount: 14},
          ],
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
  }; 

  export let addPost = (postMessage) => {

    let newPost = {
      id: 5,
      message: postMessage,
      likesCount: 3
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
  };

export default state;
