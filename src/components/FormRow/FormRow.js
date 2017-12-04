import React from 'react';
import PropTypes from 'prop-types';
// relative
import Inputs from '../../reusable/Inputs/Inputs';
import Button from '../../reusable/Button/Button';
// styles
import { ButtonDiv, LineDiv } from './FormRowStyles';

class FormRow extends React.Component {

    state = {
        highlightButton: false,
        email: { value: '', validity: undefined },
        name: { value: '', validity: undefined },
        phone: { value: '', validity: undefined },
    }

    onChangeValue = (e, propName) => {
      this.setState({ [propName]: { ...[propName], value: e.target.value } });
    }

    submitData = () => {
      const { email, name, phone } = this.state;
      if (email.valid && name.valid && phone.valid) {
        const participant = { email: email.value, name: name.value, phone: phone.value };
        this.props.addParticipant(participant);
        this.setState({ 
            email: { value: '', validity: undefined },
            name: { value: '', validity: undefined },
            phone: { value: '', validity: undefined }, 
        })
      }
      else {
        console.log('something is wrong');
      }
    }

    render() {

        const { email, highlightButton, name, phone } = this.state;
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
                  backColor="rgb(21, 123, 251)"
                  color="white"
                  primary={highlightButton}
                  onClick={this.submitData}
                  title="Add new" 
                  width="120px" 
                />
              </ButtonDiv>
          </LineDiv>
        );
    }
}

FormRow.propTypes = {
    addParticipant: PropTypes.func.isRequired,
}

export default FormRow;
