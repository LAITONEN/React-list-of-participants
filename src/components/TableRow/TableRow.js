import React from 'react';
import PropTypes from 'prop-types';
// relative
import ReadRow from './ReadRow/ReadRow';
import EditRow from './EditRow/EditRow';

class TableRow extends React.Component {

	state = {
		editMode: false,
	}

	chooseRowType = () => {
		if (this.state.editMode) {
			return <EditRow 
						showReadRow={() => this.setState({ editMode: false })}
						saveChanges={participant => this.props.editParticipant(participant)}
						participant={this.props.participant} // with id
					/>;
		}
		return <ReadRow	
					onEditClick={() => this.setState({ editMode: true })}
					deleteParticipant={(id) => this.props.deleteParticipant(id)}
					participant={this.props.participant}
				/>;
	}

    render() {
        return this.chooseRowType()
    }
}

TableRow.propTypes = {
	participant: PropTypes.shape({
		email: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		phone: PropTypes.string.isRequired,
	}).isRequired
};

export default TableRow;
