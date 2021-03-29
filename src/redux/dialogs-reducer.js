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
}


const dialogsReducer = (state = initialState, action) => {


switch (action.type) {
		case SEND_MESSAGE:
				let body = action.newMessageBody;
				 return  {
						...state,
						messages: [...state.messages, {id: 6, message: body}]
				};
		default:
				return state;
}
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;
