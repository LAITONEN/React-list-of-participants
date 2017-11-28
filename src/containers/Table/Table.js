import React from 'react';
import { connect } from 'react-redux';
// components
import FormRow from '../../components/FormRow/FormRow';
import HeaderRow from '../../components/HeaderRow/HeaderRow';
import TableRow from '../../components/TableRow/TableRow';
// actions
import { addParticipant, fetchParticipants } from '../../actions/actions';
// css
import css from './Table.css';


class Table extends React.Component {

  componentDidMount() {
      this.props.fetchParticipants();
  }

  renderTableRows = () => {
      return Object.entries(this.props.participants).map(([id, values]) => {
            const participant = { ...values, id };
            return (<TableRow
                      key={id}
                      {...participant}
                    />);
      })
  }
  // for each table row render <TableRow />
  render() {
    console.log('data:', this.props.participants);
      return (
      	<div className={css.Wrapper}>
            <FormRow />
          	<div className={css.Table}>
              <div>
            		{/*<HeaderRow />*/}
            		{this.renderTableRows()}
              </div>
          	</div>
          </div>
      );
  }
}

const mapStateToProps = state => {
    return { participants: state.data };
};

export default connect(mapStateToProps, { addParticipant, fetchParticipants })(Table);


