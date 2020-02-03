import React from 'react';
// relative
import Text from '../../reusable/Text/Text';
// css
import { CompanyInfoDiv, WrapperDiv } from './NavHeaderStyles.js';


const NavHeader = ({ children }) => {
	return (
		<WrapperDiv>
			<CompanyInfoDiv>
				{/* 	<LogoImg src={logo} alt="logo" /> */}
				<Text type="page-header-title">Company Name</Text>
			</CompanyInfoDiv>
		</WrapperDiv>
	);
};

export default NavHeader;