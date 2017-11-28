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

					/>;
		}
		return <ReadRow	
					onEditClick={() => this.setState({ editMode: true })}
					onDeleteClick={() => console.log('delete')}
					participant={this.props}
				/>;
	}

    render() {
        return this.chooseRowType()
    }
}

export default TableRow;
