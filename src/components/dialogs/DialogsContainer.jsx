import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
		return {
				dialogsPage: state.dialogsPage,
		}
}

let mapDispatchToProps = (dispatch) => {
		return {
				updateNewMessageBody: (text) => {
						dispatch(updateNewMessageBodyCreator(text));
				},
				sendMessage: (body) => {
						dispatch(sendMessageCreator(body));
				}
		}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;

/*
const DialogsContainer = (props) => {
		let state = props.store.getState().dialogsPage;


		let addMessage = () => {
				props.store.dispatch(sendMessageCreator());
				// let action = { type: 'SEND-MESSAGE' };
				// props.dispatch(action);
		};

		let onMessageChange = (body) => {
				props.store.dispatch(updateNewMessageBodyCreator(body));
				// let text = addMessageElement.current.value;
				// let action = { type: 'UPDATE-NEW-MESSAGE-TEXT', newMessage: text }
				// props.dispatch(action);\
		};

		return (
				<Dialogs updateNewMessageBody={onMessageChange} sendMessage={addMessage} dialogsPage={state}/>
		)
}
*/