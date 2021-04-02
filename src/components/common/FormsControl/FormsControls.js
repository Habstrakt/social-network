import React from "react";
import styles from "./FormsControls.module.css"
import {required} from "../../../utils/validators/validators";
import {Field} from "redux-form";

const FormControl = ({input, meta, child, ...props}) => {
		const showError = meta.touched && meta.error;
		return (
				<div className={styles.formControl + " " + (showError ? styles.error : "")}>
						<div>
								{props.children}
						</div>
						{showError && <span>{meta.error}</span>}
				</div>
		)
}

export const Textarea = (props) => {
		const {input, meta, child, ...restProps} = props;
		return <FormControl {...props}><textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
		const {input, meta, child, ...restProps} = props;
		return <FormControl {...props}><input {...input} {...restProps} /></FormControl>
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
		<div>
				<Field placeholder={placeholder}
							 validate={validators}
							 name={name} component={component}
							 {...props}
				/> {text}
		</div>
)