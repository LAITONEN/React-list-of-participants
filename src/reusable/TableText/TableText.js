import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// relative
import ArrowDown from 'react-icons/lib/md/arrow-downward';
import ArrowUp from 'react-icons/lib/md/arrow-upward';


// use theming to remove redundant second arrow styling
const ArrowDownIcon = styled(ArrowDown)`
	color: rgb(117, 117, 117); 
	font-size: 1.6rem;
	font-weight: 700;
	&:hover {
		cursor: pointer;
	}
	margin-left: 0.8rem;
`;

const ArrowUpIcon = styled(ArrowUp)`
	color: rgb(117, 117, 117); 
	font-size: 1.6rem;
	font-weight: 700;
	&:hover {
		cursor: pointer;
	}
	margin-left: 0.8rem;
`;

// 1. Split string by ' '
// 2. Line break each item ${Math.ceil(item.length/27)} times in 2 ~equal strings

const InnerDiv = styled.div`
	display: inline-block;
	&:hover {
		cursor: ${({ onClick }) => onClick ? 'pointer' : null};
	}
	word-break: ${({ type }) => type === 'email' ? 'break-all' : 'normal'};
	word-wrap: ${({ type }) => type === 'email' ? 'break-word' : 'normal'};
`;

const OuterDiv = styled.div.attrs({
	fontWeight: ({ isHeader, isSortingHeader, text }) => {
		if (isSortingHeader) return '700';
		if (isHeader) return '500';
		return '400';
	},
})`
	align-self: center;
	box-sizing: border-box;
	color: ${({ isHeader }) => isHeader ? 'rgb(117, 117, 117)' : 'rgb(80, 80, 80)'}; 
	height: ${({ normal }) => normal ? 'auto' : '3.2rem'};
	&:hover {
		cursor: ${({ onClick }) => onClick ? 'pointer' : null};
	}
	font-size: ${({ isHeader }) => isHeader ? '1.4rem' : '1.6rem'};
	font-weight: ${props => props.fontWeight};
	margin: ${props => props.margin};
	margin: 1rem;
	position: relative;
	vertical-align: middle;
	width: ${props => props.width};
`;

export default class TableText extends React.Component {


	renderArrow = () => {
		const { isSortingHeader, sortingOrder } = this.props;
		return isSortingHeader ? (sortingOrder === 'asc' ? <ArrowDownIcon /> : <ArrowUpIcon />) : null;
	}

	render () {
		const { isHeader, normal, onClick, isSortingHeader,
				sortingOrder, text, type, width } = this.props; 
	    return (
			<OuterDiv 
				isHeader={isHeader}
				normal={normal}
				isSortingHeader={isSortingHeader}
				sortingOrder={sortingOrder}
				text={text}
				width={width}
			>
			<InnerDiv onClick={onClick} type={type} >
				<span>{text}</span>
				{this.renderArrow()}
			</InnerDiv>
			</OuterDiv>
	    );
	}

};

TableText.propTypes = {
	isHeader: PropTypes.bool,
	normal: PropTypes.bool,
	onClick: PropTypes.func,
	isSortingHeader: PropTypes.bool,
	sortingOrder: PropTypes.string,
	text: PropTypes.string.isRequired,
	type: PropTypes.string,
	width: PropTypes.string.isRequired,
}




