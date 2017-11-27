import React from 'react';
import styled from 'styled-components';
// relative
import TableText from '../../../reusable/TableText/TableText';
import IconButton from '../../../reusable/IconButton/IconButton';

const StyledTR = styled.tr`
    height: 7.2rem;
`;

class ReadRow extends React.Component {
    render() {
        return (
        	<StyledTR>
	            <TableText width="narrow" />
	        	<TableText width="wide" />
	        	<TableText width="medium" />
                <td>
	               <IconButton />
	               <IconButton />
                </td>
            </StyledTR>
        );
    }
}

export default ReadRow;
