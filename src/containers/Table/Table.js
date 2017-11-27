import React from 'react';
// relative
import FormRow from '../../components/FormRow/FormRow';
import HeaderRow from '../../components/HeaderRow/HeaderRow';
import TableRow from '../../components/TableRow/TableRow';
// css
import css from './Table.css';


class Table extends React.Component {

  // for each table row render <TableRow />
  render() {
      return (
      	<div className={css.Wrapper}>
            <FormRow />
          	<table className={css.Table}>
              <tbody>
            		<HeaderRow />
            		<TableRow />
              </tbody>
          	</table>
          </div>
      );
  }
}

export default Table;
