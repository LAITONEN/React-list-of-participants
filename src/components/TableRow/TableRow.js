import React from 'react';
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
						{...this.props}
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

export default TableRow;
