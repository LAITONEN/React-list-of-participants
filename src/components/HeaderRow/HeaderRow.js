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

    state = {  
        sort: { by: 'Name', order: 'asc' },
    }

    changeSortingColumn = (value) => {
        console.log(value);
        const order = this.state.sort.order === 'asc' ? 'desc' : 'asc';
        this.setState(prevState => {
            return { sort: { by: value, order: order } };
        });
    }

    renderCells = () => {
        const { sort } = this.state;
        return ["Name", "E-mail address", 'Phone Number'].map((v, i) => {
            const shouldSort = sort.by === v;
            const width = i === 0 ? '140px' : i === 1 ? '270px' : '210px';
            return <TableText
                        key={v}
                        normal
                        onClick={() => this.changeSortingColumn(v)}
                        shouldSort={shouldSort}
                        sortOrder={sort.order}
                        text={v}
                        type="header"
                        width={width}
                />
        })
    }

    render() {
        console.log(this.state);
        return (
            <LineDiv>
                {this.renderCells()}
            </LineDiv>
        );
    }
}

export default HeaderRow;
