import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
		_state: {
				profilePage: {
						posts: [
								{id: 1, message: 'Biba', likesCount: 12},
								{id: 2, message: 'Zdarowa', likesCount: 50},
						],
						newPostText: 'Сообщение для поста'
				},

				dialogsPage: {
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
						//newMessageText: '' // newMessageBody
				},

				sidebar: {
						// friends: [
						// 		{name: 'Zalupkin'},
						// 		{name: 'Zelibobik'},
						// 		{name: 'Chert'}
						// ]
				},
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


		dispatch(action) {

				this._state.profilePage = profileReducer(this._state.profilePage, action);
				this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
				this._state.sidebar = sidebarReducer(this._state.sidebar, action);

				this._callSubscriber(this._state);
		}



}

export default store;
window.store = store;


// Dialogs
// addMessageText() {
// 		let newMessage = {
// 				id: 6,
// 				message: this._state.dialogsPage.newMessageText
// 		};
// 		this._state.dialogsPage.messages.push(newMessage);
// 		this._state.dialogsPage.newMessageText = '';
// 		this._callSubscriber(this._state);
// },
// updateNewMessageText(newMessageText) {
// 		this._state.dialogsPage.newMessageText = newMessageText;
// 		this._callSubscriber(this._state);
// },

// Posts
/* _addPost() {
		let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
},*/
/* _updateNewPostText(newText) {
		this._state.profilePage.newPostText = newText;
		this._callSubscriber(this._state);
},*/

/*
if (action.type === ADD_POST) {
		let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
				// this._addPost();
		};
		this._state.profilePage.posts.push(newPost);
		this._state.profilePage.newPostText = '';
		this._callSubscriber(this._state);
} else if (action.type === UPDATE_NEW_POST_TEXT) {
		this._state.profilePage.newPostText = action.newText;
		this._callSubscriber(this._state);
		// this._updateNewPostText(action.newText)
} else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
		this._state.dialogsPage.newMessageText = action.newMessage;
		this._callSubscriber(this._state);
} else if (action.type === SEND_MESSAGE) {
		// let newMessage = {
		// 		id: 6,
		// 		message: this._state.dialogsPage.newMessageText
		// };
		// this._state.dialogsPage.messages.push(newMessage);
		// this._state.dialogsPage.newMessageText = '';
		// this._callSubscriber(this._state);

		let message = this._state.dialogsPage.newMessageText;
		this._state.dialogsPage.newMessageText = '';
		this._state.dialogsPage.messages.push({id: 6, message: message});
		this._callSubscriber(this._state);
}
*/