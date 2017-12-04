import React from 'react';

const validation = (WrappedComponent) => {
  return class Validation extends React.Component {

      validateEmail = (value) => {
          const email = value.trim();
          const lowerCase = /[a-z]/g;
          const lowerCaseOrDot = /[^A-Z\W]\./g; // no upper case or sign, but .

          const domain = email.split('@')[1];
          const lastChar = email[email.length-1];

          if (
              typeof email === 'string' && 
              email.includes('@') && 
              email.split('@').length === 2 &&
              lowerCaseOrDot.test(domain) &&
              !email.includes(' ') && 
              lowerCase.test(lastChar) &&
              email.length - email.lastIndexOf('.') > 2 &&
              domain.indexOf('.') > 1
            ) {
                return { email: { value: email, valid: true }};
            }
          else return { email: { value: email, valid: false }};
      }

      validateName = (value) => {
          const name = value.trim();
          const hasLetters = /[a-z]/i;
          if (
              typeof name === 'string' &&
              name.includes(' ') &&
              name.length > 4 &&
              name.split(' ').every(part => hasLetters.test(part))
            ) {
              const validName = name.split(' ').map(v => {
                const firstChar = v.charAt(0);
                if (firstChar !== firstChar.toUpperCase()) {
                    return v.replace(firstChar, firstChar.toUpperCase());
                }
                return v;
              }).join(' ');
              return { name: { value: validName, valid: true }};
          }
          return { name: { value: name, valid: false }};
      }

      validatePhone = (value) => {
          const phone = value.trim();
          const noLetters = new RegExp(/[^a-z]/, 'gi');
          const hasNonDigits = new RegExp(/\D/, 'g');
          if (
              typeof phone === 'string' && 
              phone.length > 9 && 
              noLetters.test(phone)
            ) {
                const newValue = phone;
                if (hasNonDigits.test(phone)) {
                    newValue.replace(/\D/g, '');
                }
                return { phone: { value: newValue, valid: true }};
              }
          return { phone: { value: phone, valid: false }};
      }

      render() {
          return (
              <div>
              <WrappedComponent 
                {...this.props}
                validateEmail={(email) => this.validateEmail(email)}
                validateName={(name) => this.validateName(name)}
                validatePhone={(phone) => this.validatePhone(phone)}
              />
              </div>
          );
      }
  } 
}

export default validation;