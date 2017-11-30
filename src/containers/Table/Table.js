import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
// components
import FormRow from '../../components/FormRow/FormRow';
import HeaderRow from '../../components/HeaderRow/HeaderRow';
import TableRow from '../../components/TableRow/TableRow';
// actions
import * as actions from '../../actions';
// css
import css from './Table.css';


class Table extends React.Component {

  state = {  
        sort: [{ by: 'name', order: 'asc' }, { by: 'name', order: 'asc' }],
  }

  /*componentWillReceiveProps(nextProps, nexState) {
      if (nextProps !== this.props) {

      }
  }*/

  componentDidMount() {
      this.props.fetchParticipants();
  }

  componentDidUpdate(prevProps) {
    const prevParticipantsLength = Object.keys(prevProps.participants).length;
    if (prevParticipantsLength !== 0 && !_.isEqual(prevProps.participants, this.props.participants))  {
        this.props.sortParticipants(this.props.participants, this.state.sort);
    }
    if (prevParticipantsLength === 0) {
        this.props.sortParticipants(this.props.participants, this.state.sort);
    }
  }

  changeSortingColumnTo = (clickedHeader) => {
        let sortingData = [...this.state.sort];
        sortingData.pop();
        if (sortingData[0].by === clickedHeader) { // if the same header was clicked
          const order = sortingData[0].order === 'asc' ? 'desc' : 'asc';
          sortingData.unshift({ by: clickedHeader, order });
        } else { // if another header was  clicked
          sortingData.unshift({ by: clickedHeader, order: 'asc' });
        }
        this.setState({ sort: [...sortingData] });
        this.props.sortParticipants(this.props.participants, [...sortingData]);
  }

  renderTableRows = () => {
      return Object.values(this.props.participants).map(values => {
            return (<TableRow
                      editParticipant={participant => this.props.editParticipant(participant)}
                      deleteParticipant={id => this.props.deleteParticipant(id)}
                      key={values.id}
                      participant={values}
                    />);
      })
  }
  render() {
      return (
      	<div className={css.Wrapper}>
            <FormRow 
              addParticipant={(participant) => this.props.addParticipant(participant)}
              sort={this.state.sort}
            />
          	<div className={css.Table}>
              <div>
            		<HeaderRow 
                  propNames={['name', 'email', 'phone']}
                  changeSortingColumnTo={(clickedHeader) => this.changeSortingColumnTo(clickedHeader)}
                  sort={this.state.sort}
                />
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


