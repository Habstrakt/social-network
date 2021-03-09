import React from 'react';
import styleDialog from './Dialogs.module.css';
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";


const Dialogs = (props) => {
		let state = props.dialogsPage;



		let dialogsElement =
				state.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} img={dialog.img} />);

		let messagesElements =
				state.messages.map(message => <Message message={message.message} />);

		let newMessageText = state.newMessageText;



		let addMessage = () => {
				props.sendMessage();
				// let action = { type: 'SEND-MESSAGE' };
				// props.dispatch(action);
		};

		let onMessageChange = (e) => {
				let body = e.target.value;
				props.updateNewMessageBody(body);
		};




		return (
				<div className={styleDialog.dialogs}>
						<div className={styleDialog.dialogsItems}>
								{dialogsElement}
z
						</div>
						<div className={styleDialog.messages}>
								{messagesElements}
						</div>

						<div>
								<div>
										<textarea onChange={onMessageChange}  value={newMessageText} />
								</div>
								<div>
										<button onClick={addMessage} >Add Message</button>
								</div>
						</div>
				</div>
		)
}

export default Dialogs;