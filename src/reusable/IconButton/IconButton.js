import React from 'react';
import styled from 'styled-components';
//relative
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';

const Icon = styled.button`
		background-color: none;
		border: none;
		margin: 15px;
		outline: none;

`;

const Edit = styled(EditIcon)`
	color: rgb(144, 144, 144);
	height: 24px;
	&:hover {
			color: rgb(21, 123, 251);
			cursor: pointer;
		}
	width: 24px 
`;

const Delete = styled(DeleteIcon)`
	color: rgb(144, 144, 144);
	height: 24px;
	&:hover {
			color: rgb(220, 34, 34);
			cursor: pointer;
		}
	width: 24px;
`;

class IconButton extends React.Component {

	chooseType = (onClick, type) => {
		if (type === 'edit') {
			return (
				<Icon onClick={onClick} type="edit">
					<Edit />
				</Icon>
			);
		}
		else if (type === 'delete') {
			return  (
				<Icon onClick={onClick} type="delete">
					<Delete />
				</Icon>
			);
		}
		return null;
	}

    render() {
    	const { onClick, type } = this.props;
        return this.chooseType(onClick, type);
    }
}


export default IconButton;