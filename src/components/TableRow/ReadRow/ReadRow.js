import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// relative
import TableText from '../../../reusable/TableText/TableText';
import IconButton from '../../../reusable/IconButton/IconButton';

const LineDiv = styled.div`
    align-self: center;
    box-sizing: border-box;
    display: inline-flex;
    height: 7.2rem;
    justify-content: space-between;
    border-bottom: 1px solid rgb(241, 241, 241);
    overflow: hidden;
    padding-left: 1.6rem;
    width: 100%;
`;

const TextDiv = styled.div`
    align-self: center;
    height: 100%;
    display: inherit;
    font-size: 16px;
    line-height: 24px;
`;

const ButtonDiv = styled.div`
    align-self: center;
    height: 100%;
    display: inherit;
    float: right;
    line-height: 24px;
`;



class ReadRow extends React.Component {

    renderCell = () => {
        const { email, name, phone } = this.props.participant;
        const orderedTexts = { name, email, phone };
        return Object.entries(orderedTexts).map(([type, value]) => {
            const width = type === 'name' ? '140px' :
                            type === 'email' ? '270px' : 
                                                '210px';
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
                    <IconButton onClick={() => this.props.deleteParticipant(id)}type="delete" />
                </ButtonDiv>
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
