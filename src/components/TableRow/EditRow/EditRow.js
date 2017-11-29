import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// relative
import Input from '../../../reusable/Input/Input';
import Button from '../../../reusable/Button/Button';
import validation from '../../../hoc/Validation';

const LineDiv = styled.div`
    align-items: flex-start;
    background-color: white;
    display: inline-flex;
    justify-content: space-between;
    height: 7.2rem;
    margin-bottom: 0.8rem;
    width: 912px;
`;

const Inputs = styled.div`
    display: inline-flex;
    margin-left: 0.8rem;
`;

const ButtonDiv = styled.div`
    align-self: center;
    height: 100%;
    display: inherit;
    float: right;
    line-height: 40px;
`;

class EditRow extends React.Component {

	constructor(props) { 
	    super(props);
	    console.log('edit row constructor id', props);
	    const { email, id, name, phone } = props.participant;
	    this.state = {
	        disabled: false,
	        email: { value: email, valid: undefined },
	        id,
	        name: { value: name, valid: undefined },
	        phone: { value: phone, valid: undefined },
	    }
	}

	changeEmail = (e) => {
      const { email } = this.state;
      this.setState({ email: { ...email, value: e.target.value } });
    }

    changeName = (e) => {
      const { name } = this.state;
      this.setState({ name: { ...name, value: e.target.value } });
    }

    changePhone = (e) => {
      const { phone } = this.state;
      this.setState({ phone: { ...phone, value: e.target.value } });
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
  	console.log('edit row render props id', this.props);
  	console.log('edit row render state id', this.state);
  	const { 
  		showReadRow, 
  		validateEmail, 
  		validateName, 
  		validatePhone 
  	} = this.props;

  	const { email, name, phone } = this.state;
      return (
      	<LineDiv>
          <Inputs>
              <Input
                  onBlur={() => this.setState(validateName(name.value))}   
                  onChange={this.changeName}
                  placeholder="Full name"
                  tag="div"
                  valid={name.valid}
                  value={name.value}
                  width="narrow"
              />
              <Input
                  onBlur={() => this.setState(validateEmail(email.value))}                      
                  onChange={this.changeEmail}
                  placeholder="E-mail address"
                  tag="div"
                  valid={email.valid}
                  value={email.value}
                  width="wide"
              />
              <Input
                  onBlur={() => this.setState(validatePhone(phone.value))}                        
                  onChange={this.changePhone}
                  placeholder="Phone number"
                  tag="div"
                  valid={phone.valid}
                  value={phone.value}
                  width="medium"
              />
          </Inputs>
          <ButtonDiv>
	          <Button 
	          	color="rgb(21, 123, 251)"
	            backColor="rgb(237, 237, 237)"
	            onClick={showReadRow}
	            title="Cancel"
							width="80px"
						/>
	          <Button 
	          	color="rgb(237, 237, 237)"
	            backColor="rgb(21, 123, 251)"
	            onClick={this.submitChanges}
	            title="Save"
							width="80px"
						/>
					</ButtonDiv>
          </LineDiv>
      );
  }
}

export default validation(EditRow);
