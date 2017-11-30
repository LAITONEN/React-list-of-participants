import React from 'react';
import styled from 'styled-components';
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
            const sortingHeader = sort[0].by === propNames[i];
            const width = i === 0 ? '140px' : i === 1 ? '270px' : '210px';
            return <TableText
                        key={v}
                        normal
                        onClick={() => changeSortingColumnTo(propNames[i])}
                        sortingHeader={sortingHeader}
                        sortingOrder={sort[0].order}
                        text={v}
                        type="header"
                        width={width}
                />
        })
    }

    render() {
        console.log(this.props);
        return (
            <LineDiv>
                {this.renderCells()}
            </LineDiv>
        );
    }
}

export default HeaderRow;
