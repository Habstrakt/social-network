import React from 'react';
import styleMessage from './Message.module.css';

const Message = (props) => {
		return (
				<div className={styleMessage.messages} >{props.message}</div>
		)
}

export default Message;

