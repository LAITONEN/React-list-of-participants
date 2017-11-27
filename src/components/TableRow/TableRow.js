import React from 'react';
// relative
import ReadRow from './ReadRow/ReadRow';
import EditRow from './EditRow/EditRow';

class TableRow extends React.Component {

	state = {
		editMode: false,
	}

	chooseRowType = () => {
		if (this.state.editMode) return <EditRow />;
		return <ReadRow	/>;
	}

    render() {
        return this.chooseRowType();
    }
}

export default TableRow;
