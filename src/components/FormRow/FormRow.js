import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// relative
import validation from '../../hoc/Validation';
import Input from '../../reusable/Input/Input';
import Button from '../../reusable/Button/Button';

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

class FormRow extends React.Component {

    state = {
        disabled: false,
        email: { value: '', validity: undefined },
        name: { value: '', validity: undefined },
        phone: { value: '', validity: undefined },
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


    submitData = () => {
      const { email, name, phone } = this.state;
      if (email.valid && name.valid && phone.valid) {
        const participant = { email: email.value, name: name.value, phone: phone.value };
        this.props.addParticipant(participant);
      }
      else {
        console.log('something is wrong');
      }
    }

    render() {
        console.log(this.state);
        const { email, name, phone } = this.state;
        return (
          <LineDiv>
              <Inputs>
                  <Input
                      onBlur={() => this.setState(this.props.validateName(name.value))}   
                      onChange={this.changeName}
                      placeholder="Full name"
                      tag="div"
                      valid={name.valid}
                      value={name.value}
                      width="narrow"
                  />
                  <Input
                      onBlur={() => this.setState(this.props.validateEmail(email.value))}                      
                      onChange={this.changeEmail}
                      placeholder="E-mail address"
                      tag="div"
                      valid={email.valid}
                      value={email.value}
                      width="wide"
                  />
                  <Input
                      onBlur={() => this.setState(this.props.validatePhone(phone.value))}                        onChange={this.changePhone}
                      placeholder="Phone number"
                      tag="div"
                      valid={phone.valid}
                      value={phone.value}
                      width="medium"
                  />
              </Inputs>
              <Button 
                  backColor="rgb(21, 123, 251)"
                  color="white"
                  disabled={this.state.disabled}
                  onClick={this.submitData}
                  title="Add new" 
                  width="120px" 
              />
          </LineDiv>
        );
    }
}

export default validation(FormRow);
