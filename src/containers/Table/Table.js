import React from 'react';
import { connect } from 'react-redux';
// components
import FormRow from '../../components/FormRow/FormRow';
import HeaderRow from '../../components/HeaderRow/HeaderRow';
import TableRow from '../../components/TableRow/TableRow';
// actions
import * as actions from '../../actions';
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
                      editParticipant={participant => this.props.editParticipant(participant)}
                      deleteParticipant={participant => this.props.deleteParticipant(participant)}
                      key={id}
                      participant={participant}
                    />);
      })
  }
  render() {
    console.log('data:', this.props.participants);
      return (
      	<div className={css.Wrapper}>
            <FormRow 
              addParticipant={(participant) => this.props.addParticipant(participant)}
            />
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

export default connect(mapStateToProps, actions)(Table);


