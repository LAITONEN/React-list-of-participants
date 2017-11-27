import React from 'react';

const Wrapper = ({ children, tag }) => {

	const result = () => {
		if (tag === 'div') return <div>{children}</div>;
		else if (tag === 'td')  return <td>{children}</td>;
		return <td>{children}</td>;
	}
	
    return result();
};

export default Wrapper;