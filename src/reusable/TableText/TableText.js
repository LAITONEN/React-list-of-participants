import React from 'react';
import styled from 'styled-components';
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


const InnerDiv = styled.div`
	display: inline;
	&:hover {
		cursor: ${({ onClick }) => onClick ? 'pointer' : null};
	}
`;

const OuterDiv = styled.div.attrs({
	fontWeight: ({ sortingHeader, text, type }) => {
		if (sortingHeader) return '700';
		if (type === 'header') return '500';
		return '400';
	},
})`
	align-self: center;
	box-sizing: border-box;
	color: ${({ type }) => type === 'header' ? 'rgb(117, 117, 117)' : 'rgb(80, 80, 80)'}; 
	height: ${({ normal }) => normal ? 'auto' : '3.2rem'};
	&:hover {
		cursor: ${({ onClick }) => onClick ? 'pointer' : null};
	}
	font-size: ${props => props.type === 'header' ? '1.4rem' : '1.6rem'};
	font-weight: ${props => props.fontWeight};
	margin: ${props => props.margin};
	margin: 1rem;
	position: relative;
	vertical-align: middle;
	width: ${props => props.width};
`;

export default class TableText extends React.Component {


	renderArrow = () => {
		const { sortingHeader, sortingOrder } = this.props;
		return sortingHeader ? (sortingOrder === 'asc' ? <ArrowDownIcon /> : <ArrowUpIcon />) : null;
	}

	render () {
		const { normal, onClick, sortingHeader, sortingOrder, text, type, width } = this.props; 
		// does not re-order
	    return (
			<OuterDiv 
				normal={normal}
				sortingHeader={sortingHeader}
				sortingOrder={sortingOrder}
				text={text}
				type={type}
				width={width}
			>
			<InnerDiv onClick={onClick}>
				<span>{text}</span>
				{this.renderArrow()}
			</InnerDiv>
			</OuterDiv>
	    );
	}

};




