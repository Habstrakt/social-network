import React from 'react';
import styleDialogItem from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
		let path = '/dialogs/' + props.id;
		return (
				<div className={styleDialogItem.dialogsItems + ' ' + styleDialogItem.active}>
						<img src={props.img} alt="" className={styleDialogItem.avatar}/>
						<NavLink to={path}>{props.name}</NavLink>
				</div>
		)
}

export default DialogItem;