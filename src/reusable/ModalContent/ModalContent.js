import React from 'react';
// relative
import Button from '../Button/Button';
import Text from '../Text/Text';
// stlyes
import { ButtonDiv, DataDiv, HeaderNamesDiv, InfoDiv, WrapperDiv } from './ModalContentStyles';



const ModalContent = ({ children, headerNames, hideModal, participant, proceedWithAction}) => {
	// receive information of the participant
	// arrange in Name: {name}, E-mail: {email}, Phone: {phone} format
	// paste it inside the Text div

	// buttons on the left underneath the question
	// participant daya on the right

	// structure: Left side: Question, 2 Buttons underneath inline 
	// Right side: 3 lines of data in the format above
	const renderData = () => {
		return Object.entries(participant).map(([index, data]) => {
			if (headerNames[index]) {
				return (
						<Text key={data} size="1.8rem">
							{data}
						</Text>
					);
			}
			return null;
		}).filter(v => v);
	}
	const renderHeaderNames = () => {
		return Object.entries(participant).map(([index]) => {
			if (headerNames[index]) {
				return (
						<Text left bold key={index} size="1.8rem">
							{headerNames[index]}:
						</Text>
					);
			}
			return null;
		}).filter(v => v);
	}
    return (
        <WrapperDiv>
        	<Text fontSize="2rem">{children}</Text>
        	<InfoDiv>
        		<HeaderNamesDiv>{renderHeaderNames()}</HeaderNamesDiv>
        		<DataDiv>{renderData()}</DataDiv>
        	</InfoDiv>
    		<ButtonDiv>
    			<Button 
    				backColor="rgb(35, 220, 61)"
					onHoverColor="white"
					onClick={proceedWithAction}
					title="Yes"
				/>
    			<Button 
    				backColor="rgb(220, 34, 34)"
					onHoverColor="white"
					onClick={hideModal}
					title="No"
				/>
			</ButtonDiv>
        </WrapperDiv>
    );
};

ModalContent.propTypes = {

}

export default ModalContent;