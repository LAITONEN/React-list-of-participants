import React from 'react';
// relative
import Text from '../../reusable/Text/Text';
import logo from '../../nord.png';
// css
import css from './NavHeader.css';


const NavHeader = ({ children }) => {
	return (
		<div className={css.Wrapper}>
			<img src={logo} className={css.Logo} alt="logo" />
			<Text type="page-header-title">Nord Software</Text>
		</div>
	);
};

export default NavHeader;