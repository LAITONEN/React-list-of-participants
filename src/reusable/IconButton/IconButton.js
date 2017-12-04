import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//relative
import EditIcon from 'react-icons/lib/fa/pencil';
import DeleteIcon from 'react-icons/lib/fa/trash';
import CrossIcon from 'react-icons/lib/fa/close';

const NormalIcon = styled.button`
	background-color: none;
	border: none;
	margin: 15px;
	outline: none;
`;

const CornerIcon = NormalIcon.extend`
	position: absolute;
	right: 0;
	top: 0;
	z-index: 2;
`;

const Cross = styled(CrossIcon)`
	color: rgb(144, 144, 144);
	height: 24px;
	&:hover {
			color: rgb(220, 34, 34);
			cursor: pointer;
			-webkit-transform: scale(1.1, 1.1);
			-ms-transform: scale(1.1, 1.1);
			transform: scale(1.1, 1.1);
			transition: all 0.2s ease-in-out;
		}
	width: 24px;
`;

const Delete = styled(DeleteIcon)`
	color: rgb(144, 144, 144);
	height: 24px;
	&:hover {
			color: rgb(220, 34, 34);
			cursor: pointer;
			-webkit-transform: scale(1.1, 1.1);
			-ms-transform: scale(1.1, 1.1);
			transform: scale(1.1, 1.1);
			transition: all 0.2s ease-in-out;
		}
	width: 24px;
`;

const Edit = styled(EditIcon)`
	color: rgb(144, 144, 144);
	height: 24px;
	&:hover {
			color: rgb(21, 123, 251);
			cursor: pointer;
			-webkit-transform: scale(1.1, 1.1);
			-ms-transform: scale(1.1, 1.1);
			transform: scale(1.1, 1.1);
			transition: all 0.2s ease-in-out;
		}
	width: 24px 
`;

class IconButton extends React.Component {

	renderIconByType = (onClick, type) => {
		if (type === 'edit') {
			return (
				<NormalIcon onClick={onClick} type="edit">
					<Edit />
				</NormalIcon>
			);
		}
		else if (type === 'delete') {
			return  (
				<NormalIcon onClick={onClick} type="delete">
					<Delete />
				</NormalIcon>
			);
		}
		else {
			return (
				<CornerIcon onClick={onClick} type="cross">
					<Cross />
				</CornerIcon>
			);
		}
	}

    render() {
    	const { onClick, type } = this.props;
        return this.renderIconByType(onClick, type);
    }
}

IconButton.propTypes = {
	onClick: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
}


export default IconButton;