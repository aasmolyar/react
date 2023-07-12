const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Dusha" },
    { id: 2, name: "Den" },
  ],

  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How" },
  ],

  newMessageBody: "",

  photo: [
    { id: 1, photo: "https://img.icons8.com/?size=1x&id=13042&format=png" },
    { id: 2, photo: "https://img.icons8.com/?size=1x&id=13042&format=png" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 3, message: body });
      return state;

    default:
      return state;
  }
};

export const sendMessageCreator = () => {
  return { type: SEND_MESSAGE };
};
export const updateNewMessageBodyCreator = (body) => {
  return { type: UPDATE_NEW_MESSAGE_BODY, body: body };
};

export default dialogsReducer;
