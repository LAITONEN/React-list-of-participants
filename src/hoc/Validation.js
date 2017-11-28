

import React from 'react';

const validation = (WrappedComponent) => {
  return class Validation extends React.Component {

      validateEmail = (email) => {
          const lowerCase = /[a-z]/g;
          const lowerCaseOrDot = /[a-z]|\./g;

          const domain = email.split('@')[1];
          const lastChar = email[email.length-1];

          if (
              typeof email === 'string' && 
              email.includes('@') && 
              email.split('@').length === 2 &&
              lowerCaseOrDot.test(domain) &&
              !email.includes(' ') && 
              lowerCase.test(lastChar) &&
              email.length - email.lastIndexOf('.') > 2
            ) {
                console.log('true');
                return { email: { value: email, valid: true }};
            }
          else return { email: { value: email, valid: false }};
      }

      validateName = (name) => {
          if (typeof name === 'string' && name.includes(' ') && name.length > 4) {
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

      validatePhone = (phone) => {
          const hasLetters = new RegExp(/[a-z]/, 'gi');
          const hasNonDigits = new RegExp(/\D/, 'g');
          if (
              typeof phone === 'string' && 
              phone.length > 9 && 
              !hasLetters.test(phone) && 
              !hasNonDigits.test(phone)
            ) {
                return { phone: { value: phone, valid: true }};
              }
          return { phone: { value: phone, valid: false }};
      }

      render() {
          return (
              <div>
              <WrappedComponent 
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