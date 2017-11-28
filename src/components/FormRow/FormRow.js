import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// relative
import Input from '../../reusable/Input/Input';
import Button from '../../reusable/Button/Button';
import { addParticipant } from '../../actions/actions';

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
        email: { value: '', valid: undefined },
        name: { value: '', valid: undefined },
        phone: { value: '', valid: undefined },
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

    validateEmail = () => {
        const email = this.state.email.value;
        const regExp = /[a-z]/g;
        if (
            typeof email === 'string' && 
            email.includes('@') && 
            (email.split('@').length === 2 && email.split('@')[1].includes ('.')) &&
            !email.includes (' ') && 
            regExp.test(email[email.length-1]) &&
            email.length - email.lastIndexOf('.') > 2
          ) {
              this.setState({ email: { value: email, valid: true }});
          }
        else this.setState({ email: { value: email, valid: false }});
    }

    validateName = () => {
        const name = this.state.name.value;
        if (typeof name === 'string' && name.includes(' ') && name.length > 4) {
            const validName = name.split(' ').map(v => {
              const firstChar = v.charAt(0);
              if (firstChar !== firstChar.toUpperCase()) {
                  return v.replace(firstChar, firstChar.toUpperCase());
              }
              return v;
            }).join(' ');
            console.log(validName);
            this.setState({ name: { value: validName, valid: true } });
        }
        else this.setState({ name: { value: name, valid: false }});
    }

    validatePhone = () => {
        const phone = this.state.phone.value;
        const hasLetters = new RegExp(/[a-z]/, 'gi');
        const hasNonDigits = new RegExp(/\D/, 'g');
        if (
            typeof phone === 'string' && 
            phone.length > 9 && 
            !hasLetters.test(phone) && 
            !hasNonDigits.test(phone)
          ) {
              this.setState({ phone: { value: phone, valid: true }});
            }
        else this.setState({ phone: { value: phone, valid: false }});
    }

    render() {
        const { email, name, phone } = this.state;
        return (
          <LineDiv>
              <Inputs>
                  <Input
                      onBlur={this.validateName}
                      onChange={this.changeName}
                      placeholder="Full name"
                      tag="div"
                      valid={name.valid}
                      value={name.value}
                      width="narrow"
                  />
                  <Input
                      onBlur={this.validateEmail}
                      onChange={this.changeEmail}
                      placeholder="E-mail address"
                      tag="div"
                      valid={email.valid}
                      value={email.value}
                      width="wide"
                  />
                  <Input
                      onBlur={this.validatePhone}
                      onChange={this.changePhone}
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

export default connect(null, { addParticipant })(FormRow);
