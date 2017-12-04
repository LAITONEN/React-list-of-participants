import React from 'react';
import PropTypes from 'prop-types';
// relative
import IconButton from '../../../reusable/IconButton/IconButton';
import Modal from '../../../reusable/Modal/Modal';
import ModalContent from '../../../reusable/ModalContent/ModalContent';
import TableText from '../../../reusable/TableText/TableText';
// styles
import { ButtonDiv, LineDiv, TextDiv } from './ReadRowStyles';


class ReadRow extends React.Component {

    state = {
        modalVisible: false,
    }

    renderCell = () => {
        const { email, name, phone } = this.props.participant;
        const orderedTexts = { name, email, phone };
        return Object.entries(orderedTexts).map(([type, value]) => {
            const width = type === 'name' ? '140px' : (type === 'email' ? '270px' : '210px');
            return <TableText key={type} normal text={value} type={type} width={width} />
        });
    }

    render() {
        const { id } = this.props.participant;
        return (
            <LineDiv>
                <TextDiv>
    	            {this.renderCell()}
                </TextDiv>
                <ButtonDiv>
                    <IconButton onClick={this.props.onEditClick} type="edit" />
                    <IconButton onClick={() => this.setState({ modalVisible: true })}type="delete" />
                </ButtonDiv>
                <Modal
                    hideModal={() => this.setState({ modalVisible: false })}
                    visible={this.state.modalVisible}
                >
                    <ModalContent
                        headerNames={this.props.headerNames}
                        hideModal={() => this.setState({ modalVisible: false })}
                        participant={this.props.participant}
                        proceedWithAction={() => this.props.deleteParticipant(id)}
                    >
                        Are you sure you want to delete this participant?
                    </ModalContent>
                </Modal>
            </LineDiv>
        );
    }
}

ReadRow.propTypes = {
    deleteParticipant: PropTypes.func.isRequired,
    onEditClick: PropTypes.func.isRequired,
    participant: PropTypes.shape({
        email: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired
};

export default ReadRow;
