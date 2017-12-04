import React from 'react';
// relative
import Text from '../../reusable/Text/Text';
import logo from '../../nord.png';
// css
import { LogoImg, WrapperDiv } from './NavHeaderStyles.js';


const NavHeader = ({ children }) => {
	return (
		<WrapperDiv>
			<LogoImg src={logo} alt="logo" />
			<Text type="page-header-title">Nord Software</Text>
		</WrapperDiv>
	);
};

export default NavHeader;