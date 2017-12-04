import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
// components
import FormRow from '../../components/FormRow/FormRow';
import HeaderRow from '../../components/HeaderRow/HeaderRow';
import Modal from '../../reusable/Modal/Modal';
import ModalContent from '../../reusable/ModalContent/ModalContent';
import Spinner from '../../reusable/Spinner/Spinner';
import TableRow from '../../components/TableRow/TableRow';
// actions
import * as actions from '../../actions';
// css
import { TableDiv, WrapperDiv } from './TableStyles';



class Table extends React.Component {

  state = {  
        dataFetched: false,
        headerNames: { name: 'Name', email: 'E-mail Address', phone: 'Phone Number'},
        modalVisible: false,
        participant: {},
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

  showModal = (participant) => {
    this.setState({ modalVisible: true, participant });
  }

  renderTableRows = () => {
    const { editParticipant, participants } = this.props
      if (participants) {
      return Object.values(participants).map(values => {
          return (<TableRow
                    editParticipant={participant => editParticipant(participant)}
                    headerNames={this.state.headerNames}
                    key={values.id}
                    participant={values}
                    showModal={(participant) => this.showModal(participant)}
                  />);
        })
      }
      return null;
  }

  render() {
    const { dataFetched, headerNames, modalVisible, participant, sort } = this.state;
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
          <Modal
            hideModal={() => this.setState({ modalVisible: false })}
            visible={modalVisible}
          >
            <ModalContent
              headerNames={headerNames}
              hideModal={() => this.setState({ modalVisible: false })}
              participant={participant}
              proceedWithAction={() => this.props.deleteParticipant(participant.id)}
            >
                Are you sure you want to delete this participant?
            </ModalContent>
           </Modal>
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


