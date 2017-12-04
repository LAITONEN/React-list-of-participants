import React from 'react';
import PropTypes from 'prop-types';
// relative
import Wrapper from '../Wrapper';
// css
import { StyledInput } from './InputStyles';

class Input extends React.Component {

	state = {
		showHoverEffects: true,
	}

	doubleAction = () => {
		this.setState({ showHoverEffects: true });
		this.props.onBlur();
	}

    render() {
    	const { onChange, placeholder, tag, valid, value, width } = this.props;
    	const isPhoneInput = /phone/gi.test(placeholder);
        return (
            <Wrapper typeOfJSXtag={tag}>
       		<StyledInput
       			maxLength={isPhoneInput ? 23 : 70}
       			onBlur={this.doubleAction}
       			onChange={onChange}
       			onFocus={() => this.setState({ showHoverEffects: false })}
       			placeholder={placeholder}
       			showHoverEffects={this.state.showHoverEffects}
       			valid={valid}
       			value={value}
       			width={width}
   			/>
        </Wrapper> 
        );
    }
}

Input.propTypes = {
	onChange: PropTypes.func.isRequired,
	placeholder: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	valid: PropTypes.bool,
	value: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
}

export default Input;