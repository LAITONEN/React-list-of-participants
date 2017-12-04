import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
//relative
import validation from '../../hoc/Validation';
import Input from '../Input/Input';

const InputsDiv = styled.div`
    display: inline-flex;
    margin-left: 0.8rem;
`;

const Inputs = ({ email, name, onBlur, onChangeValue, phone, validateEmail, validateName, validatePhone}) => {
    return (
		<InputsDiv>
			<Input
			  onBlur={() => onBlur(validateName(name.value))}   
			  onChange={(e) => onChangeValue(e, 'name')}
			  placeholder="Full name"
			  tag="div"
			  valid={name.valid}
			  value={name.value}
			  width="140px"
			/>
			<Input
			  onBlur={() => onBlur(validateEmail(email.value))}                      
			  onChange={(e) => onChangeValue(e, 'email')}
			  placeholder="E-mail address"
			  tag="div"
			  valid={email.valid}
			  value={email.value}
			  width="270px"
			/>
			<Input
			  onBlur={() => onBlur(validatePhone(phone.value))}                        
			  onChange={(e) => onChangeValue(e, 'phone')}
			  placeholder="Phone number"
			  tag="div"
			  valid={phone.valid}
			  value={phone.value}
			  width="210px"
			/>
		</InputsDiv>
    );
};

Inputs.propTypes = {
    email: PropTypes.shape({
		value: PropTypes.string.isRequired,
		valid: PropTypes.bool,
    }).isRequired,
    name: PropTypes.shape({
		value: PropTypes.string.isRequired,    	
		valid: PropTypes.bool,    	
    }).isRequired,
    phone: PropTypes.shape({
		value: PropTypes.string.isRequired,    	
		valid: PropTypes.bool,    	
    }).isRequired,
    onBlur: PropTypes.func.isRequired,
    onChangeValue: PropTypes.func.isRequired,
    validateEmail: PropTypes.func.isRequired,
    validateName: PropTypes.func.isRequired,
    validatePhone: PropTypes.func.isRequired,
}

export default validation(Inputs);