import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
// components
import FormRow from '../../components/FormRow/FormRow';
import HeaderRow from '../../components/HeaderRow/HeaderRow';
import TableRow from '../../components/TableRow/TableRow';
import Spinner from '../../reusable/Spinner/Spinner';
// actions
import * as actions from '../../actions';
// css
import { TableDiv, WrapperDiv } from './TableStyles';



class Table extends React.Component {

  state = {  
        dataFetched: false,
        headerNames: { name: 'Name', email: 'E-mail Address', phone: 'Phone Number'},
        propNames: ['name', 'email', 'phone'],
        sort: [{ header: 'name', order: 'asc' }, { header: 'name', order: 'asc' }],
        sortingOrders: { email: 'asc', name: 'asc', phone: 'asc' },
  }

  componentWillReceiveProps(nextProps, nexState) {
      if (!this.state.showSpinner) {
        this.setState({ dataFetched: true });
      }
  }

  componentDidMount() {
      this.props.fetchParticipants();
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(prevProps.participants, this.props.participants))  {
        this.props.sortParticipants(this.props.participants, this.state.sort);
    }
  }

  // same header clicked -> order rule changes
  // different header clicked -> order rule remains

  changeSortingColumnTo = (clickedHeader) => {
        let newSortRules = [...this.state.sort];
        newSortRules.pop();
        if (newSortRules[0].header === clickedHeader) { // if the same header was clicked
          const newOrder = this.state.sortingOrders[clickedHeader] === 'asc' ? 'desc' : 'asc';
          newSortRules.unshift({ header: clickedHeader, order: newOrder });
          this.setState({ sortingOrders: { ...this.state.sortingOrders, [clickedHeader]: newOrder } });

        } else { // if another header was  clicked
          newSortRules.unshift({ header: clickedHeader, order: this.state.sortingOrders[clickedHeader] });
        }

        this.setState({ sort: [...newSortRules] });
        if (this.props.participants) {
          this.props.sortParticipants(this.props.participants, [...newSortRules]);
        }
  }

  renderTableRows = () => {
    const { editParticipant, deleteParticipant, participants } = this.props
      if (participants) {
      return Object.values(participants).map(values => {
            return (<TableRow
                      editParticipant={participant => editParticipant(participant)}
                      deleteParticipant={id => deleteParticipant(id)}
                      headerNames={this.state.headerNames}
                      key={values.id}
                      participant={values}
                    />);
        })
      }
      return null;
  }
  render() {
    const { dataFetched, headerNames, propNames, sort } = this.state;
      return (
      	<WrapperDiv>
            <FormRow 
              addParticipant={(participant) => this.props.addParticipant(participant)}
            />
          	<TableDiv>
            		<HeaderRow 
                  headerNames={headerNames}
                  changeSortingColumnTo={(clickedHeader) => this.changeSortingColumnTo(clickedHeader)}
                  sort={sort}
                />
            		{dataFetched ? this.renderTableRows() : <Spinner />}
          	</TableDiv>
          </WrapperDiv>
      );
  }
}

Table.propTypes = {
  participants: PropTypes.objectOf(PropTypes.objectOf(PropTypes.string))
}

Table.defaultProps = {
  participants: null,
}

const mapStateToProps = state => {
    return { participants: state.data };
};

export default connect(mapStateToProps, actions)(Table);


