const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
		messages: [
				{id: 1, message: 'hi'},
				{id: 2, message: 'Zdarowa'},
				{id: 3, message: 'How are you ?'},
				{id: 4, message: 'Biba'},
				{id: 5, message: 'and Boba'},
		],
		dialogs: [
				{id: 1, name: 'kukuruza', img: 'https://html5css.ru/w3images/avatar2.png'},
				{id: 2, name: 'gavno', img: 'https://html5css.ru/w3images/avatar2.png'},
				{id: 3, name: 'zalupa', img: 'https://html5css.ru/w3images/avatar2.png'},
				{id: 4, name: 'zeliboba', img: 'https://html5css.ru/w3images/avatar2.png'},
				{id: 5, name: 'valera', img: 'https://html5css.ru/w3images/avatar2.png'},
		],
		newMessageText: '' // newMessageBody
}

const dialogsReducer = (state = initialState, action) => {

		switch (action.type) {
				case UPDATE_NEW_MESSAGE_TEXT:
						state.newMessageText = action.newMessage;
						return state;
				case SEND_MESSAGE:
						let message = state.newMessageText;
						state.newMessageText = '';
						state.messages.push({id: 6, message: message});
						return state;
				default:
						return state;
		}

		//return state;
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;
