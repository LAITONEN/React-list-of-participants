import React from 'react';
import styled from 'styled-components';
// relative
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
        email: { value: '', valid: undefined },
        name: { value: '', valid: undefined },
        phone: { value: '', valid: undefined },
    }

    changeEmail = (e) => {
      const { email } = this.state;
      this.setState({ email: { valid: email.valid, value: e.target.value } });
    }

    changeName = (e) => {
      const { name } = this.state;
      this.setState({ name: { valid: name.valid, value: e.target.value } });
    }

    changePhone = (e) => {
      const { phone } = this.state;
      this.setState({ phone: { valid: phone.valid, value: e.target.value } });
    }

    validateInput = (type) => {
      const name = this.state.name.value;
      const email = this.state.email.value;
      const phone = this.state.phone.value;
      if (type === 'name') { 
        if (this.verifyName(name)) {
          const validName = name.split(' ').map(v => {
            const firstChar = v.charAt(0)
            if (firstChar !== firstChar.toUpperCase()) {
                return v.replace(firstChar, firstChar.toUpperCase());
            }
            return v;
          }).join(' ');
         this.setState({ name: { value: validName, valid: true } });
        }
        else this.setState({ name: { value: name, valid: false }});
      }
      else if (type === 'email') { 
        if (this.verifyEmail(email)) {
          this.setState({ email: { value: email, valid: true }});
        }
        else this.setState({ email: { value: email, valid: false }});
      }
      else if (type === 'phone') { 
          if (this.verifyPhone(phone)) {
            let validPhone = phone;
            if (phone.test(/\D/g)) validPhone = phone.replace(/\D/g, '');
            this.setState({ phone: { value: validPhone, valid: true }});
          }
          else this.setState({ phone: { value: phone, valid: false }});
      }
    }

    verifyEmail = (email) => {
      const regExp = /[a-z]/g;
      if (
          typeof email === 'string' && 
          email.includes('@') && 
          (email.split('@').length === 2 && email.split('@')[1].includes ('.')) &&
          !email.includes (' ') && 
          regExp.test(email[email.length-1])
        ) {
        return true;
      }
      return false;
    }

    verifyName = (name) => {
      if (typeof name === 'string' && name.includes(' ') && name.length > 4) return true;
      return false;
    }

    verifyPhone = (phone) => {
      const regExp = /[a-z]/gi;
      if (typeof phone === 'string' && phone.length > 9 && !regExp.test(phone)) return true;
      return false;
    }

    render() {
        const { email, name, phone } = this.state;
        console.log(this.state.email);
        return (
            <LineDiv>
                <Inputs>
                    <Input
                        onBlur={() => this.validateInput('name')}
                        onChange={this.changeName}
                        placeholder="Full name"
                        tag="div"
                        valid={name.valid}
                        value={name.value}
                        width="narrow"
                    />
                    <Input
                        onBlur={() => this.validateInput('email')}
                        onChange={this.changeEmail}
                        placeholder="E-mail address"
                        tag="div"
                        valid={email.valid}
                        value={email.value}
                        width="wide"
                    />
                    <Input
                        onBlur={() => this.validateInput('phone')}
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
                    title="Add new" 
                    width="120px" 
                />
            </LineDiv>
        );
    }
}

export default FormRow;
