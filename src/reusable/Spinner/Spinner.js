import React from 'react';
import styled from 'styled-components';

import css from './Spinner.css';

const OuterDiv = styled.div`
	height: inherit;
	vertical-align: middle;
	width: inherit;
`;

const Spinner = (props) => {
    return (
    	<OuterDiv>
    		<div className={css.Loader}>Loading...</div>
    	</OuterDiv>
    	);
};

export default Spinner;