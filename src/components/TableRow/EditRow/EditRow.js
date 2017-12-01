import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
    border-bottom: 1px solid rgb(241, 241, 241);
    width: 912px;
`;

const Inputs = styled.div`
    display: inline-flex;
    margin-left: 0.8rem;
`;

const ButtonDiv = styled.div`
    align-items: center;
    align-self: center;
    height: 100%;
    display: inherit;
    float: right;
    line-height: 40px;
    margin-right: 1.6rem;
`;

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
                  width="140px"
              />
              <Input
                  onBlur={() => this.setState(validateEmail(email.value))}                      
                  onChange={this.changeEmail}
                  placeholder="E-mail address"
                  tag="div"
                  valid={email.valid}
                  value={email.value}
                  width="270px"
              />
              <Input
                  onBlur={() => this.setState(validatePhone(phone.value))}                        
                  onChange={this.changePhone}
                  placeholder="Phone number"
                  tag="div"
                  valid={phone.valid}
                  value={phone.value}
                  width="210px"
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
  validateEmail: PropTypes.func.isRequired,
  validateName: PropTypes.func.isRequired,
  validatePhone: PropTypes.func.isRequired,
};

export default validation(EditRow);
