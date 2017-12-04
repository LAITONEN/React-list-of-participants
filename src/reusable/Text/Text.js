import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledText = styled.p.attrs({
		color: ({ type }) => {
				if (type === 'body-title') return 'rgb(117, 117, 117)';
				else if (type === 'page-header-title') return 'white';
				return 'black';
		},
		margin: ({ type }) => {
			if (type === 'body-title') return '6.4rem 0 3.2rem 3.2rem';
			return 0;
		}
	})`
		align-self: center;
		color: ${props => props.color}; 
		display: inline-flex;
		font-size: ${({ size }) => size ? size : '2.4rem'};
		font-weight: ${({ bold }) => bold ? '600' : '400'};
		justify-content: flex-start;
  		margin: ${props => props.margin};
		position: relative;
`;

const Text = ({ bold, children, color, size, style, type }) => {
    return (
		<StyledText bold={bold} size={size} style={style} type={type}>{children}</StyledText>
    );
};

Text.propTypes = {
	color: PropTypes.string,
	fontSize: PropTypes.string,
	type: PropTypes.string,
}

export default Text;