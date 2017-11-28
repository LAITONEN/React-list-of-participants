import React from 'react';
import styled from 'styled-components';
//relative
import Edit from 'react-icons/lib/fa/pencil';
import Delete from 'react-icons/lib/fa/trash';

const Icon = styled.button`
		background-color: none;
		border: none;
		&.hover: {
			color: ${props => props.type === 'delete' ? 'rgb(220, 34, 34)' : 'rgb(21, 123, 251)'};
			cursor: pointer;
		}
		margin: 15px;
		outline: none;

`;

class IconButton extends React.Component {

	chooseType = (type) => {
		const style = { color: 'rgb(144, 144, 144)', height: '24px', width: '24px' };
		if (type === 'edit') {
			return (
				<Icon type="edit">
					<Edit style={style}/>
				</Icon>
			);
		}
		else if (type === 'delete') {
			return  (
				<Icon type="delete">
					<Delete style={style}/>
				</Icon>
			);
		}
		return null;
	}

    render() {
    	console.log(<Edit />);
    	const { type } = this.props;
        return this.chooseType(type);
    }
}


export default IconButton;