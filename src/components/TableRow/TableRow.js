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
		const { editParticipant, deleteParticipant, 
				headerNames, participant } = this.props;

		if (this.state.editMode) {
			return <EditRow 
						showReadRow={() => this.setState({ editMode: false })}
						saveChanges={participant => editParticipant(participant)}
						participant={participant} // with id
					/>;
		}
		return <ReadRow	
					deleteParticipant={(id) => deleteParticipant(id)}
					headerNames={headerNames}
					onEditClick={() => this.setState({ editMode: true })}
					participant={participant}
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
