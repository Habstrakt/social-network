import React from 'react';
import {connect} from "react-redux";
import Nav from "./Nav";

let mapStateToProps = (state) => {
		return {
				sidebar: state.sidebar
		}
}

const SidebarContainer = connect(mapStateToProps) (Nav);

export default SidebarContainer;