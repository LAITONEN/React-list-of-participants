import React from 'react';
import PropTypes from 'prop-types';
// relative
import Inputs from '../../../reusable/Inputs/Inputs';
import Button from '../../../reusable/Button/Button';
import { ButtonDiv, LineDiv } from './styles';

class EditRow extends React.Component {

	constructor(props) { 
    super(props);
    const { email, id, name, phone } = props.participant;
    this.state = {
        disabled: false,
        email: { value: email, valid: undefined },
        id,
        name: { value: name, valid: undefined },
        phone: { value: phone, valid: undefined },
    }
	}

  onChangeValue = (e, propName) => {
    this.setState({ [propName]: { ...[propName], value: e.target.value } });
  }

	
  submitChanges = () => {
		const { email, id, name, phone } = this.state;
		if (email.valid !== false && name.valid !== false && phone.valid !== false) {
			const participant = { 
					email: email.value, 
					id,
					name: name.value, 
					phone: phone.value,
			};
	    	this.props.saveChanges(participant);
	    	this.props.showReadRow();
		}
		else {
			// show error message, tooltip, animation?
			console.log('something is wrong');
		}
  }

  render() {
  	const { email, name, phone } = this.state;
      return (
      	<LineDiv>
          <Inputs 
            email={email}
            name={name}
            onBlur={(prop) => this.setState(prop)}
            onChangeValue={this.onChangeValue}
            phone={phone} 
          />
          <ButtonDiv>
	          <Button 
	          	color="rgb(21, 123, 251)"
	            backColor="rgb(237, 237, 237)"
	            onClick={this.props.showReadRow}
	            title="Cancel"
							width="80px"
						/>
	          <Button 
	          	color="rgb(237, 237, 237)"
	            backColor="rgb(21, 123, 251)"
	            onClick={this.submitChanges}
	            onHoverColor="white"
	            primary
	            title="Save"
							width="80px"
						/>
					</ButtonDiv>
          </LineDiv>
      );
  }
}

EditRow.propTypes = {
  participant: PropTypes.shape({
    email: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  saveChanges: PropTypes.func.isRequired,
  showReadRow: PropTypes.func.isRequired,
};

export default EditRow;
