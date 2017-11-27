import React from 'react';
import styled from 'styled-components';

				// body-title
				// table-header-title-unselected
				// normal

const StyledTableData = styled.td.attrs({
	/*color: ({ type }) => {
		if (type === 'header') return 'rgb(117, 117, 117)'; // maybe should be 80 80 80
		return 'rgb(80, 80, 80)';
	},*/
	fontWeight: ({ selected, type }) => {

		if (selected) return '700px';
		if (type === 'header') return '500px';
		return '400px';
	}
})`
	align-self: center;
	color: ${({ type }) => type === 'header' ? 'rgb(117, 117, 117)' : 'rgb(80, 80, 80)'}; 
	display: inline-flex;
	height: ${({ normal }) => normal ? 'auto' : '3.2rem'};
	font-size: ${props => props.size};
	font-weight: ${props => props.fontWeight}
	margin: ${props => props.margin};
	position: relative;
	vertical-align: middle;
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
		const { text, type } = this.props; 
	    return (
			<StyledTableData 
				onClick={this.toggleSelection} 
				selected={this.state.selected}
				type={type}
			>{text}
			</StyledTableData>
	    );
	}

};




