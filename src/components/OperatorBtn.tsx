import React from 'react';

const OperatorBtn = ({o, onClick}) => {
    if(o === 'C'){
        return <button onClick={onClick} className="clearKey">{o}</button>;
    } else {
        return <button onClick={onClick}>{o}</button>;
    }
}

export default OperatorBtn;