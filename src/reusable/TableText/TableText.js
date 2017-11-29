import React from 'react';
import styled from 'styled-components';
import ArrowDown from 'react-icons/lib/md/arrow-downward';
import ArrowUp from 'react-icons/lib/md/arrow-upward';


// use theming to remove redundant second arrow styling
const ArrowDownIcon = styled(ArrowDown)`
	color: rgb(117, 117, 117); 
	font-size: 1.6rem;
	font-weight: 700;
	margin-left: 0.8rem;
`;

const ArrowUpIcon = styled(ArrowUp)`
	color: rgb(117, 117, 117); 
	font-size: 1.6rem;
	font-weight: 700;
	margin-left: 0.8rem;
`;

const StyledDiv = styled.div.attrs({
	fontWeight: ({ shouldSort, text, type }) => {
		if (shouldSort) return '700';
		if (type === 'header') return '500';
		return '400';
	},
})`
	align-self: center;
	color: ${({ type }) => type === 'header' ? 'rgb(117, 117, 117)' : 'rgb(80, 80, 80)'}; 
	height: ${({ normal }) => normal ? 'auto' : '3.2rem'};
	font-size: ${props => props.type === 'header' ? '1.4rem' : '1.6rem'};
	font-weight: ${props => props.fontWeight};
	margin: ${props => props.margin};
	margin: 1rem;
	position: relative;
	vertical-align: middle;
	width: ${props => props.width};
`;

export default class TableText extends React.Component {

	render () {
		const { normal, onClick, shouldSort, sortOrder, text, type, width } = this.props; 
		if (type === 'header') console.log(this.props);
	    return (
			<StyledDiv 
				normal={normal}
				onClick={onClick} 
				shouldSort={shouldSort}
				sortOrder={sortOrder}
				text={text}
				type={type}
				width={width}
			><span>{text}</span>
			{shouldSort ? sortOrder === 'asc' ? <ArrowDownIcon /> : <ArrowUpIcon /> : null}
			</StyledDiv>
	    );
	}

};




