import React from 'react';
import styled from 'styled-components';
// relative
import TableText from '../../reusable/TableText/TableText';


const StyledTR = styled.tr`
    height: 4.8rem;
`;

class HeaderRow extends React.Component {

    state = {

    }

    render() {
        return (
            // render using .map
            <StyledTR>
                <TableText
                    initial
                    text="Name"
                    type="header"
                />
                <TableText
                    text="E-mail address"
                    type="header"
                />
            	<TableText 
                    text="Phone Number"
                    type="header"
                />
            </StyledTR>
        );
    }
}

export default HeaderRow;
