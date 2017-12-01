import React from 'react';
import PropTypes from 'prop-types';

const Wrapper = ({ children, typeOfJSXtag }) => {

	const result = () => {
		if (typeOfJSXtag === 'div') return <div>{children}</div>;
		else if (typeOfJSXtag === 'td')  return <td>{children}</td>;
		return <td>{children}</td>;
	}
	
    return result();
};

Wrapper.propTypes = {
	typeOfJSXtag: PropTypes.string,
}

export default Wrapper;