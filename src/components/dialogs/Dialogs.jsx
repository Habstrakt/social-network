import React from 'react';
import styleDialog from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Dialogs = (props) => {
		let state = props.dialogsPage;

		let dialogsElement =
				state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);

		let messagesElements =
				state.messages.map(message => <Message message={message.message} />);




		let addNewMessage = (values) => {
				props.sendMessage(values.newMessageBody);
		};

		if (props.isAuth === false) {
			return (
					<Redirect to={"/login"} />
					)
		};

		return (
				<div className={styleDialog.dialogs}>
						<div className={styleDialog.dialogsItems}>
								{dialogsElement}
						</div>
						<div className={styleDialog.messages}>
								{messagesElements}
						</div>
						<AddMessageForm onSubmit={addNewMessage}/>
				</div>
		)
}

export default Dialogs;