import React from 'react';
// relative
import Input from '../../../reusable/Input/Input';
import Button from '../../../reusable/Button/Button';

class EditRow extends React.Component {
    render() {
        return (
        	<tr>
	            <Input placeholder="Full name" width="narrow" />
	        	<Input placeholder="E-mail address" width="wide" />
	        	<Input placeholder="Phone number" width="medium" />
	        	<td>
		            <Button />
		            <Button />
	            </td>
            </tr>
        );
    }
}

export default EditRow;
