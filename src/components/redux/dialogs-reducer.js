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

  photo: [
    { id: 1, photo: "https://img.icons8.com/?size=1x&id=13042&format=png" },
    { id: 2, photo: "https://img.icons8.com/?size=1x&id=13042&format=png" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [...state.messages, { id: 3, message: body }],
      };
    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageBody) => {
  return { type: SEND_MESSAGE, newMessageBody };
};

export default dialogsReducer;
