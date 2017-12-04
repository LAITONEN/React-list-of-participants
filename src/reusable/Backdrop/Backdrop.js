import React from 'react';

import { BackdropDiv } from './BackdropStyles.js';

const Backdrop = ({ hide, modalVisible }) => {
    return modalVisible ? <BackdropDiv onClick={hide}></BackdropDiv> : null;
};

export default Backdrop;