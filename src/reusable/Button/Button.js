import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => props.primary ? props.backColor : "rgb(237, 237, 237)"};
	border: ${({ backColor, border }) => border ? `3px solid ${backColor}` : 'none'} ;
	border-radius: 0px;
	color: ${props => props.primary ? props.color : "rgb(117, 117, 117)" };
	font-size: 1.6rem;
	font-weight: 500;
	height: 4rem;
	&:hover {
		color: ${props => props.onHoverColor || props.color};
		background-color: ${props => props.backColor};
		border: none;
		cursor: pointer;
		-webkit-transform: scale(1.05, 1.05);
		-ms-transform: scale(1.05, 1.05);
		transform: scale(1.05, 1.05);
	}
	margin-left: 0.8rem;
	outline: none;
	transition: all 0.2s ease-in-out;
	width: ${props => props.width || '160px'};
`;

const Button = ({ backColor, color, primary, onClick, onHoverColor, style, title, width }) => {
    return (
		<StyledButton
			backColor={backColor}
			color={color}
			primary={primary}
			onClick={onClick}
			onHoverColor={onHoverColor}
			style={style}
			width={width}
		>{title}
		</StyledButton>
        
    );
};

Button.propTypes = {
	backColor: PropTypes.string,
	color: PropTypes.string,
	primary: PropTypes.bool,
	onClick: PropTypes.func.isRequired,
	onHoverColor: PropTypes.string,
	title: PropTypes.string.isRequired,
	width: PropTypes.string,
}

export default Button;