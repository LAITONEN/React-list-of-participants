import React from 'react';
import styled from 'styled-components';

				// body-title
				// table-header-title-unselected
				// normal

const StyledDiv = styled.div.attrs({
	/*color: ({ type }) => {
		if (type === 'header') return 'rgb(117, 117, 117)'; // maybe should be 80 80 80
		return 'rgb(80, 80, 80)';
	},*/
	fontWeight: ({ selected, type }) => {

		if (selected) return '700px';
		if (type === 'header') return '500px';
		return '400px';
	},
	// have some sort of bug that adds +2px to each inputs
	width: ({ width }) => {
		if (width === 'narrow') return '138px';
		else if (width === 'wide') return '268px';
		return '208px';
	}
})`
	align-self: center;
	color: ${({ type }) => type === 'header' ? 'rgb(117, 117, 117)' : 'rgb(80, 80, 80)'}; 
	height: ${({ normal }) => normal ? 'auto' : '3.2rem'};
	font-size: ${props => props.size};
	font-weight: ${props => props.fontWeight}
	margin: ${props => props.margin};
	margin: 1rem;
	position: relative;
	vertical-align: middle;
	width: ${props => props.width};
`;

export default class TableText extends React.Component {

	constructor(props) { 
	    super(props);
	    this.state = { selected: props.initial || false}
	}

	toggleSelection = () => {
		this.setState(prevState => {
			return { selected: !prevState.selected };
		});
	}

	render () {
		const { normal, text, width } = this.props; 
	    return (
			<StyledDiv 
				normal={normal}
				onClick={this.toggleSelection} 
				selected={this.state.selected}
				text={text}
				width={width}
			>{text}
			</StyledDiv>
	    );
	}

};




