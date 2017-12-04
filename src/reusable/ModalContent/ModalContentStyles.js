import styled from 'styled-components';

export const WrapperDiv = styled.div`
	align-items: center;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	height: auto;
	margin: auto;
	width: auto;
`;


export const InfoDiv = styled.div`
	border: 1px solid black;
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	margin: 10px;
	padding: 15px;
`;

export const HeaderNamesDiv = styled.div`
	display: flex;
	flex-direction: column;
`;

export const DataDiv = styled.div`
	display: flex;
	flex-direction: column;
	margin-left: 10px;
`;

/*export const TextDiv = styled.div`
	display: inherit;
	flex-direction: column;
	flex-grow: 2;
`;*/

export const ButtonDiv = styled.div`
	display: inherit;
	flex-direction: row;
	flex-grow: 1;
	margin: inherit;
`;