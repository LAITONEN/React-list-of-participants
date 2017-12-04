import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// relative
import TableText from '../../reusable/TableText/TableText';


const LineDiv = styled.div`
    align-self: center;
    border-bottom: 1px solid rgb(241, 241, 241);
    box-sizing: border-box;
    display: inline-flex;
    height: 4.8rem;
    &:hover {
        background-color: white;
        border-bottom: 2px solid rgb(220, 220, 220);
        border-top: 2px solid rgb(220, 220, 220);
        tra
    }
    overflow: hidden;
    padding-left: 1.6rem;
    vertical-align: middle;
    width: 100%;
`;

class HeaderRow extends React.Component {

    renderCells = () => {
        const { changeSortingColumnTo, headerNames, sort } = this.props;
        return Object.entries(headerNames).map(([propName, headerName]) => {
            const isSortingHeader = sort[0].header === propName;
            const width = propName === 'name' ? '140px' : propName === 'email' ? '270px' : '210px';
            return <TableText
                        isHeader
                        key={headerName}
                        normal
                        onClick={() => changeSortingColumnTo(propName)}
                        isSortingHeader={isSortingHeader}
                        sortingOrder={sort[0].order}
                        text={headerName}
                        width={width}
                />
        })
    }

    render() {
        return (
            <LineDiv>
                {this.renderCells()}
            </LineDiv>
        );
    }
}



HeaderRow.propTypes = {
    changeSortingColumnTo: PropTypes.func.isRequired, 
    headerNames: PropTypes.shape({
        email: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        phone: PropTypes.string.isRequired,
    }).isRequired,
    sort: PropTypes.arrayOf(
            PropTypes.shape({
                header: PropTypes.oneOf(['email', 'name', 'phone']).isRequired,
                order: PropTypes.oneOf(['asc', 'desc']).isRequired,
            }).isRequired).isRequired,
};

export default HeaderRow;
