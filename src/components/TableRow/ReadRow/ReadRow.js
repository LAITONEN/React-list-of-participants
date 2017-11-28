import React from 'react';
import styled from 'styled-components';
// relative
import TableText from '../../../reusable/TableText/TableText';
import IconButton from '../../../reusable/IconButton/IconButton';

const LineDiv = styled.div`
    align-self: center;
    outline: 1px solid rgb(241, 241, 241);
    box-sizing: border-box;
    height: 7.2rem;
    display: inline-flex;
    justify-content: space-between;
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
        const { email, name, phone } = this.props;
        const orderedTexts = { name, email, phone };
        return Object.entries(orderedTexts).map(([type, value]) => {
            const width = type === 'name' ? 'narrow' :
                            type === 'email' ? 'wide' : 
                                                'medium';
            return <TableText key={type} normal text={value} width={width} />
        });
    }

    render() {
        console.log(this.props);
        return (
            <LineDiv>
                <TextDiv>
    	            {this.renderCell()}
                </TextDiv>
                <ButtonDiv>
                    <IconButton type="edit" />
                    <IconButton type="delete" />
                </ButtonDiv>
            </LineDiv>
        );
    }
}

export default ReadRow;
