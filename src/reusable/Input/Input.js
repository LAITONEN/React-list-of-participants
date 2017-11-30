import React from 'react';
import styled from 'styled-components';
// relative
import Wrapper from '../Wrapper';
// css
import css from './Input.css';

const StyledInput = styled.input.attrs({
	border: props => {
		switch (props.valid) {
			case undefined:
				return '1px solid rgb(235, 235, 235)';
			case false:
				return '2px solid rgb(220, 34, 34)';
			default: 
				return '2px solid rgb(35, 220, 61)';
		}
	},
})`
	align-items: center;
	background-color: rgb(250, 250, 250);
	border: ${props => props.border};
	box-sizing: border-box;
	color: rgb(80, 80, 80);
	height: 4rem;
	&:focus {
		border: 3px solid rgba(117, 117, 117, 0.3);
	}
	font-size: 1.6rem;
	font-weight: 300;
	&:hover {
		box-shadow: 0 0 2px rgba(80, 80, 80, 0.7);
	}
	margin: 1.6rem 0.8rem;
	outline: none;
	padding: 0rem 1.2rem;
	width: ${props => props.width};
`;

const Input = ({ onBlur, onChange, placeholder, tag, valid, value, width }) => {
    return (
        <Wrapper tag={tag}>
       		<StyledInput
       			className={css.Input}
       			onBlur={onBlur}
       			onChange={onChange}
       			placeholder={placeholder}
       			valid={valid}
       			value={value}
       			width={width}
   			/>
        </Wrapper> 
    );
};

export default Input;