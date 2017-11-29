import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
	background-color: ${props => props.primary ? props.backColor : "rgb(237, 237, 237)"};
	border: none;
	border-radius: 0px;
	color: ${props => props.primary ? props.color: "rgb(117, 117, 117)" };
	font-size: 1.6rem;
	font-weight: 500;
	height: 4rem;
	&:hover {
		color: ${props => props.onHoverColor || props.color};
		background-color: ${props => props.backColor};
		cursor: pointer;
		font-size: 1.65rem;
	}
	margin-left: 0.8rem;
	outline: none;
	transition: all 0.2s ease-in-out;
	width: ${props => props.width || '160px'};
`;

const Button = ({ backColor, color, primary, onClick, onHoverColor, onMouseMove, title, width }) => {
    return (
		<StyledButton
			backColor={backColor}
			color={color}
			primary={primary}
			onClick={onClick}
			onHoverColor={onHoverColor}
			onMouseMove={onMouseMove}
			width={width}
		>{title}
		</StyledButton>
        
    );
};

export default Button;