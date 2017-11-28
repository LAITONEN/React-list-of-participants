import React from 'react';
// relative
import ReadRow from './ReadRow/ReadRow';
import EditRow from './EditRow/EditRow';

class TableRow extends React.Component {

	state = {
		editMode: false,
	}

	chooseRowType = () => {
		const { email, name, phone } = this.props;
		if (this.state.editMode) {
			return <EditRow 

					/>;
		}
		return <ReadRow	
					email={email}
					name={name}
					phone={phone}
				/>;
	}

    render() {
    	console.log(this.props);
        return this.chooseRowType()
    }
}

export default TableRow;
