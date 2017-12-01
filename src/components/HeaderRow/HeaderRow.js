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
    overflow: hidden;
    padding-left: 1.6rem;
    vertical-align: middle;
    width: 100%;
`;

class HeaderRow extends React.Component {

    renderCells = () => {
        const { changeSortingColumnTo, propNames, sort } = this.props;
        return ["Name", "E-mail Address", 'Phone Number'].map((v, i) => {
            const isSortingHeader = sort[0].header === propNames[i];
            const width = i === 0 ? '140px' : i === 1 ? '270px' : '210px';
            return <TableText
                        isHeader
                        key={v}
                        normal
                        onClick={() => changeSortingColumnTo(propNames[i])}
                        isSortingHeader={isSortingHeader}
                        sortingOrder={sort[0].order}
                        text={v}
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
    propNames: PropTypes.arrayOf(PropTypes.oneOf(['email', 'name', 'phone'])).isRequired,
    sort: PropTypes.arrayOf(
            PropTypes.shape({
                header: PropTypes.oneOf(['email', 'name', 'phone']).isRequired,
                order: PropTypes.oneOf(['asc', 'desc']).isRequired,
            }).isRequired).isRequired,
};

export default HeaderRow;
