import React from 'react';
import styled from 'styled-components';

import Backdrop from '../Backdrop/Backdrop';
import IconButton from '../IconButton/IconButton';
// import Dummy from '../../../hoc/Dummy';
import { ModalDiv } from './ModalStyles';

class Modal extends React.Component {

	shouldComponentUpdate = (nextProps, nextState) => {
		return this.props.visible !== nextProps.visible;
	}

    render() {
    	const { children, hideModal, visible } = this.props;

        return(
            <div>
	       		<Backdrop hide={hideModal} modalVisible={visible} />
		       	<ModalDiv visible={visible}>
					<IconButton onClick={hideModal} type="cross" />
		       		<div style={{ position: 'relative' }}>
			        	{children}
		        	</div>
		        </ModalDiv>
	        </div>
        );
    }
}

export default Modal;