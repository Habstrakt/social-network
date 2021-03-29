import React from 'react';
import {sendMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
		return {
				dialogsPage: state.dialogsPage
		}
}

let mapDispatchToProps = (dispatch) => {
		return {
				sendMessage: (newMessageBody) => {
						dispatch(sendMessageCreator(newMessageBody));
				}
		}
}

export default compose(
		connect(mapStateToProps, mapDispatchToProps),
		withAuthRedirect
)(Dialogs);

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